
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('package', function(table) {
    table.dropColumn('delivered_at');
  }).then(() => {
    return knex.schema.alterTable('package', function(table) {
      table.timestamp('delivered_at');
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('package', function(table) {
    table.dropColumn('delivered_at');
  }).then(() => {
    return knex.schema.alterTable('package', function(table) {
      table.dropColumn('delivered_at');
      table.time('delivered_at');
    });
  });
};
