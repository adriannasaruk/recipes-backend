exports.up = function(knex) {
    return knex.schema.createTable('recipes', recipes => {
      recipes.increments().unique();
      recipes.integer('user_id').unsigned().notNullable().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE")
      recipes.string('title', 255).notNullable().unique();
      recipes.string('source', 255).notNullable();
      recipes.string('ingredients', 255).notNullable();
      recipes.string('instructions', 500).notNullable();
      recipes.string('category', 500).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
  };
  