
exports.up = function(knex, Promise) {
  return knex.schema.table('shelter', function(table) {
      table.string('picture');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('shelter', function(table) {
      table.dropColumn('picture');
  });
};
