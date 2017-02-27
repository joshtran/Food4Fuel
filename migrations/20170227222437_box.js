exports.up = function(knex, Promise) {
  return knex.schema.createTable('box', function(table) {
    table.increments();
    table.string('type').notNullable();
    table.integer('package_id').unsigned();
    table.foreign('package_id').references('package.id');
    table.integer('grocery_id').unsigned();
    table.foreign('grocery_id').references('grocery.id');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('box');
};