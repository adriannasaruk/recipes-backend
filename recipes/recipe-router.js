const router = require("express").Router()

const userDB = require("./recipe-model")


router.get("/", (req,res) => {
    userDB.find()
    .then(recipes => {
        res.status(201).json(recipes)
    })
    .catch(error => res.send(error))
})


router.post("/", (req,res) => {
    const newrecipe = req.body
    userDB.add(newrecipe)
    
})

module.exports = router