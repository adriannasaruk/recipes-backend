const userDB = require('../data/dbConfig')


module.exports = {
    find,
}

function find(){
    return userDB("public")
}