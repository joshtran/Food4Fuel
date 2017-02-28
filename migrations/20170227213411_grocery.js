
exports.up = function(knex, Promise) {
  return knex.schema.createTable('grocery', function(table) {
    table.increments().primary();
    table.string('name').notNullable();
    table.string('location').notNullable();
    table.string('notes');
    table.string('email').notNullable().unique();
    table.integer('phone_number').notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('grocery');
};
