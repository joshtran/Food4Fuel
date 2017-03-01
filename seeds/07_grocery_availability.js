
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery_availability').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grocery_availability').insert({grocery_id: 1, day_id: 1, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 1, day_id: 2, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 1, day_id: 3, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 1, day_id: 4, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 1, day_id: 5, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 1, day_id: 6, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 1, day_id: 7, t_start: '3:00 PM', t_end: '7:15 PM'}),

        knex('grocery_availability').insert({grocery_id: 2, day_id: 1, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 2, day_id: 2, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 2, day_id: 3, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 2, day_id: 4, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 2, day_id: 5, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 2, day_id: 6, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 2, day_id: 7, t_start: '2:00 PM', t_end: '6:00 PM'}),

        knex('grocery_availability').insert({grocery_id: 3, day_id: 1, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 3, day_id: 2, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 3, day_id: 3, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 3, day_id: 4, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 3, day_id: 5, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 3, day_id: 6, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({grocery_id: 3, day_id: 7, t_start: '4:30 PM', t_end: '6:00 PM'}),

        knex('grocery_availability').insert({grocery_id: 4, day_id: 1, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({grocery_id: 4, day_id: 2, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({grocery_id: 4, day_id: 3, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({grocery_id: 4, day_id: 4, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({grocery_id: 4, day_id: 5, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({grocery_id: 4, day_id: 6, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({grocery_id: 4, day_id: 7, t_start: '5:00 PM', t_end: '8:30 PM'}),

        knex('grocery_availability').insert({grocery_id: 5, day_id: 1, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 5, day_id: 2, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 5, day_id: 3, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 5, day_id: 4, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 5, day_id: 5, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 5, day_id: 6, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({grocery_id: 5, day_id: 7, t_start: '4:15 PM', t_end: '7:15 PM'}),

      ]);
    });
};
