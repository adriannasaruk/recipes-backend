
exports.up = function(knex) {
    return knex.schema.createTable('public', recipes => {
        recipes.increments().unique();
        recipes.string('title', 255).notNullable().unique();
        recipes.string('source', 255).notNullable();
        recipes.string('ingredients', 255).notNullable();
        recipes.string('instructions', 500).notNullable();
        recipes.string('category', 500).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('public');
};
