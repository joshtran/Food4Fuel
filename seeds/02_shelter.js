
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shelter').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shelter').insert({name: 'The Salvation Army Harbour Light', location: '119 E Cordova St', notes: 'Enter from backdoor.', email: 'salvation@email.com', phone_number: '(604) 646-6800' }),
        knex('shelter').insert({name: 'Catholic Charity Mens Hostel', location: '828 Cambie St', notes: 'Food always welcome!', email: 'catholic@email.com', phone_number: '(604) 443-3292' }),
        knex('shelter').insert({name: 'First United Church Community Ministry Society', location: '320 East Hastings Street', notes: 'We really like apples.', email: 'first@email.com', phone_number: '(604) 681-8365' }),
        knex('shelter').insert({name: 'RainCity Housing', location: '185 Alexander St', notes: 'Good housing support, organics always welcome.', email: 'raincity@email.com', phone_number: '(604) 662-7023' }),
        knex('shelter').insert({name: 'Union Gospel Mission', location: '601 E Hastings St', notes: 'Help always welcome!', email: 'union@email.com', phone_number: '(604) 253-3323' })
      ]);
    });
};
