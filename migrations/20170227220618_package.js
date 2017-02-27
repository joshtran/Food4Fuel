
exports.up = function(knex, Promise) {
  return knex.schema.createTable('package', function(table) {
    table.increments().primary();
    table.integer('shelter_id').unsigned();
    table.foreign('shelter_id').references('shelter.id');
    table.integer('users_id').unsigned();
    table.foreign('users_id').references('users.id');
    table.time('delivered_at');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('package');
};