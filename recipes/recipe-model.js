const userDB = require('../data/dbConfig')


module.exports = {
    add,
    find,
    findById,
    remove,
    update
}


 function add(recipes){
    return db("recipes")
    .insert(recipes)
 } 


function find(id){
    return userDB("recipes")
    .join("users", "recipes.user_id", "users.id")
    .where("recipes.user_id", id)
}

function remove(id){
    return userDB("recipes")
    .where({id})
    .del()
}

function update(id, changes){
    return userDB('recipes')
    .where({id})
    .update(changes)
    .then(() => {
        return findById(id);
      });
}


function findById(id){
    return userDB("recipes")
    .where({ id })
    .first()
}


