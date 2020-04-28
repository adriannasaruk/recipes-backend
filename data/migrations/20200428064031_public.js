
exports.up = function(knex) {
    return knex.schema.createTable('public', public => {
        public.increments().unique();
        public.string('title', 255).notNullable().unique();
        public.string('source', 255).notNullable();
        public.string('ingredients', 255).notNullable();
        public.string('instructions', 500).notNullable();
        public.string('category', 500).notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('public');
};
