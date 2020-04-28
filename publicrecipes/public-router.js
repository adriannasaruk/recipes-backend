const router = require("express").Router()

const userDB = require("./public-model")


router.get("/", (req,res) => {
    userDB.find()
    .then(recipes => {
        res.status(201).json(recipes)
    })
    .catch(error => res.send(error))
})

module.exports = router