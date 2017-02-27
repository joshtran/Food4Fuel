
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments().primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.integer('reward_points');
    table.string('password_digest').notNullable();
    table.string('drivers_license');
    table.date('verified_at');
    table.string('email').notNullable().unique();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
