
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shelter', function(table) {
    table.increments().primary();
    table.string('name').notNullable();
    table.string('location').notNullable();
    table.time('available_start').notNullable();
    table.time('available_end').notNullable();
    table.string('available_days').notNullable();
    table.string('notes');
    table.string('email').notNullable().unique();
    table.integer('phone_number').notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shelter');
};
