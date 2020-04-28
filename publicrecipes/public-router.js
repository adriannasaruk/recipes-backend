const router = require("express").Router()

const userDB = require("./public-model")


router.get("/", (req,res) => {
    userDB.find()
    .then(recipes => {
        res.status(201).json({message: "Here are the recipes:", recipes})
    })
    .catch(error => res.send(error))
})

module.exports = router