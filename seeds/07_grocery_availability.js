
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery_availability').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grocery_availability').insert({id: 1, grocery_id: 1, day_id: 1, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 2, grocery_id: 1, day_id: 2, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 3, grocery_id: 1, day_id: 3, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 4, grocery_id: 1, day_id: 4, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 5, grocery_id: 1, day_id: 5, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 6, grocery_id: 1, day_id: 6, t_start: '3:00 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 7, grocery_id: 1, day_id: 7, t_start: '3:00 PM', t_end: '7:15 PM'}),

        knex('grocery_availability').insert({id: 8, grocery_id: 2, day_id: 1, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 9, grocery_id: 2, day_id: 2, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 10, grocery_id: 2, day_id: 3, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 11, grocery_id: 2, day_id: 4, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 12, grocery_id: 2, day_id: 5, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 13, grocery_id: 2, day_id: 6, t_start: '2:00 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 14, grocery_id: 2, day_id: 7, t_start: '2:00 PM', t_end: '6:00 PM'}),

        knex('grocery_availability').insert({id: 15, grocery_id: 3, day_id: 1, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 16, grocery_id: 3, day_id: 2, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 17, grocery_id: 3, day_id: 3, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 18, grocery_id: 3, day_id: 4, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 19, grocery_id: 3, day_id: 5, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 20, grocery_id: 3, day_id: 6, t_start: '4:30 PM', t_end: '6:00 PM'}),
        knex('grocery_availability').insert({id: 21, grocery_id: 3, day_id: 7, t_start: '4:30 PM', t_end: '6:00 PM'}),

        knex('grocery_availability').insert({id: 22, grocery_id: 4, day_id: 1, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({id: 23, grocery_id: 4, day_id: 2, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({id: 24, grocery_id: 4, day_id: 3, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({id: 25, grocery_id: 4, day_id: 4, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({id: 26, grocery_id: 4, day_id: 5, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({id: 27, grocery_id: 4, day_id: 6, t_start: '5:00 PM', t_end: '8:30 PM'}),
        knex('grocery_availability').insert({id: 28, grocery_id: 4, day_id: 7, t_start: '5:00 PM', t_end: '8:30 PM'}),

        knex('grocery_availability').insert({id: 29, grocery_id: 5, day_id: 1, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 30, grocery_id: 5, day_id: 2, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 31, grocery_id: 5, day_id: 3, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 32, grocery_id: 5, day_id: 4, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 33, grocery_id: 5, day_id: 5, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 34, grocery_id: 5, day_id: 6, t_start: '4:15 PM', t_end: '7:15 PM'}),
        knex('grocery_availability').insert({id: 35, grocery_id: 5, day_id: 7, t_start: '4:15 PM', t_end: '7:15 PM'}),

      ]);
    });
};
