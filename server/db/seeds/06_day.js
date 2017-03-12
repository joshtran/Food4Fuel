
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('day').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('day').insert({name: 'Sunday'}),
        knex('day').insert({name: 'Monday'}),
        knex('day').insert({name: 'Tuesday'}),
        knex('day').insert({name: 'Wednesday'}),
        knex('day').insert({name: 'Thursday'}),
        knex('day').insert({name: 'Friday'}),
        knex('day').insert({name: 'Saturday'})
      ]);
    });
};
