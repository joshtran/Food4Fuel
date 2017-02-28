const bcrypt = require('bcrypt');
const dateformat = require('dateformat');
const date = new Date().toISOString();

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password', salt);
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, first_name: 'Felipe', last_name: 'Suarez', reward_points: '9000', password_digest: hash, drivers_license: '123456',
          verified_at: date, email: 'felipe@email.com'}),
      ]);
    });
};
