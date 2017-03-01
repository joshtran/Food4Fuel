let time = new Date();
time = time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
const date = new Date().toISOString();

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('package').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('package').insert({shelter_id: 1, users_id: 1, delivered_at: time, created_at: date}),
        knex('package').insert({shelter_id: 2, users_id: 2, delivered_at: time, created_at: date}),
        knex('package').insert({shelter_id: 3, users_id: 3, delivered_at: time, created_at: date}),
        knex('package').insert({shelter_id: 4, users_id: 4, delivered_at: time, created_at: date})
      ]);
    });
};
