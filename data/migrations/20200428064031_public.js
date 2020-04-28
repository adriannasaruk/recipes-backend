
exports.up = function(knex) {
    return knex.schema.createTable('public', public => {
        public.increments().unique();
        public.string('title', 100).notNullable().unique();
        public.string('source', 50).notNullable();
        public.string('ingredients', 2000).notNullable();
        public.string('instructions', 2000).notNullable();
        public.string('category', 50).notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('public');
};
