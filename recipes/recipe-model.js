const userDB = require('../data/dbConfig')


module.exports = {
    add,
    find,
    findById,
    getByUserId,
    remove,
    update
}


function add(recipes) {
  return userDB("recipes")
    .insert(recipes)
}

function getByUserId(id) {
    return userDB("recipes")
    .join("users", "recipes.user_id", "users.id")
    .select("recipes.title", "recipes.source", "recipes.ingredients", "recipes.instructions", "recipes.category")
   .where("recipes.user_id", id)
   }


function find(){
    return userDB("recipes")
}

function remove(id) {
    return userDB("recipes")
      .where({ id })
      .del();
  }

function update(id, changes){
    return userDB('recipes')
    .where({id})
    .update(changes)
}


function findById(id){
    return userDB("recipes")
    .where({ id })
}




