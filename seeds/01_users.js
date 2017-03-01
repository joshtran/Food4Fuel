const bcrypt = require('bcrypt');
const date = new Date().toISOString();

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password', salt);
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({first_name: 'Felipe', last_name: 'Suarez', reward_points: '9000', password_digest: hash, drivers_license: '123456',
          verified_at: date, email: 'felipe@email.com'}),
        knex('users').insert({first_name: 'Arman', last_name: 'Kazemi', reward_points: '10000', password_digest: hash, drivers_license: '123321',
          verified_at: date, email: 'arman@email.com'}),
        knex('users').insert({first_name: 'Jinuk', last_name: 'Kim', reward_points: '9000', password_digest: hash, drivers_license: '654321',
          verified_at: date, email: 'jinuk@email.com'}),
        knex('users').insert({first_name: 'Josh', last_name: 'Tran', reward_points: '9000', password_digest: hash, drivers_license: '321123',
          verified_at: date, email: 'josh@email.com'}),
      ]);
    });
};
