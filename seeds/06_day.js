
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('day').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('day').insert({id: 1, name: 'Sunday'}),
        knex('day').insert({id: 2, name: 'Monday'}),
        knex('day').insert({id: 3, name: 'Tuesday'}),
        knex('day').insert({id: 4, name: 'Wednesday'}),
        knex('day').insert({id: 5, name: 'Thursday'}),
        knex('day').insert({id: 6, name: 'Friday'}),
        knex('day').insert({id: 7, name: 'Saturday'})
      ]);
    });
};
