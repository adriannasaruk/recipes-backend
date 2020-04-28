const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const recipeRouter = require('../recipes/recipe-router.js')
const publicRouter = require("../publicrecipes/public-router.js")


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api/public', publicRouter)
server.use('/api/recipes', authenticate, recipeRouter)
server.use('/api/auth', authRouter);



server.get("/", (req,res) => {
    res.status(200).json({
        message: "Server is up"
    })
})


module.exports = server;
