
exports.up = function(knex, Promise) {
  return knex.schema.table('grocery', function(table) {
      table.string('pickup_hours');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('grocery', function(table) {
      table.dropColumn('pickup_hours');
  });
};
