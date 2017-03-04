
exports.up = function(knex, Promise) {
  return knex.schema.table('grocery', function(table) {
      table.string('picture');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('grocery', function(table) {
      table.dropColumn('picture');
  });
};
