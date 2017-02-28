
exports.up = function(knex, Promise) {
  return knex.schema.createTable('day', function(table){
    table.increments().primary();
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('day');
};
