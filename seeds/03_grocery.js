
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grocery').insert({name: 'IGA', location: '909 Burrard St', notes: 'Talk to Joe at the counter.', email: 'iga@email.com', phone_number: '(604) 605-0612'}),
        knex('grocery').insert({name: 'Nesters Market', location: '990 Seymour St', notes: 'Come in from the side door.', email: 'nesters@email.com', phone_number: '(604) 682-3071'}),
        knex('grocery').insert({name: 'Foodness', location: '927 Seymour St', notes: 'Talk to Jimmy for more information.', email: 'foodness@email.com', phone_number: '(604) 568-8646'}),
        knex('grocery').insert({name: 'Famous Foods', location: '1595 Kingsway St', notes: 'Come in through the bulk foods section.', email: 'famous@email.com', phone_number: '(604) 872-3019'}),
        knex('grocery').insert({name: 'T & T Supermarket', location: '179 Keefer Pl', notes: 'Come in through the restaurant section.', email: 'tandt@email.com', phone_number: '(604) 899-8836'})
      ]);
    });
};
