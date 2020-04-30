const router = require('express').Router();
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 


const usersDB = require("../users/user-model"); 
const { jwtSecret } = require("./secrets");


router.post("/register", (req, res) => {
let userInfo = req.body;
const ROUNDS = process.env.HASHING_ROUNDS || 8
const hash = bcrypt.hashSync(userInfo.password, ROUNDS);
userInfo.password = hash;
usersDB
  .add(userInfo)
  .then(users => {
    res.status(201).json({message: "You are registered!", users})
  })
  .catch(error => {
    res.status(401).json({erroeMessage: `${error}: Something went wrong with your resgistration`})
  })
});


router.post("/login", (req, res) => {
  let { username, password } = req.body

  usersDB.findBy({ username })
  .first()
  .then(user =>{
    if (user && bcrypt.compareSync(password, user.password)) {
     
      const token = generateToken(user)

      res.status(200).json({
        message: `Welcome back ${user.username}`,
        id: user.id,
        token
      })
    } else {
      res.status(401).json({message: "invaild credentials"})
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })

});

function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role || "user",
  }

  const options= {
    expiresIn: "1h",
  }
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;