exports.up = function(knex, Promise) {
  return knex.schema.createTable('grocery_availability', function(table){
    table.increments().primary();
    table.integer('grocery_id').unsigned();
    table.foreign('grocery_id').references('grocery.id');
    table.integer('day_id').unsigned();
    table.foreign('day_id').references('day.id');
    table.string('t_start').notNullable();
    table.string('t_end').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('grocery_availability');
};