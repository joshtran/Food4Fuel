
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grocery').insert({name: 'IGA', location: '909 Burrard St', notes: 'Talk to Joe at the counter.', email: 'iga@email.com', phone_number: '(604) 605-0612', picture:'iga.png'}),
        knex('grocery').insert({name: 'Nesters Market', location: '990 Seymour St', notes: 'Come in from the side door.', email: 'nesters@email.com', phone_number: '(604) 682-3071', picture:'nestersmarket.png'}),
        knex('grocery').insert({name: 'Foodness', location: '927 Seymour St', notes: 'Come in through the bulk foods section.', email: 'foodness@email.com', phone_number: '(604) 568-8646', picture:'foodness.jpg'}),
        knex('grocery').insert({name: 'Meinhardt Fine Foods', location: '609 Granville St', notes: 'Talk to Jimmy for more information.', email: 'meinhardt@email.com', phone_number: '(604) 681-8175', picture:'meinhardt.jpg'}),
        knex('grocery').insert({name: 'H-Mart', location: '590 Robson St #200', notes: 'Come in through the restaurant section.', email: 'hmart@email.com', phone_number: '(604) 609-4567', picture:'hmart.png'})
      ]);
    });
};
