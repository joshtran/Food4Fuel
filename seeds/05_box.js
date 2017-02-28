const date = new Date().toISOString();

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('box').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('box').insert({id: 1, type: 'Produce', package_id: 1, grocery_id: 1, created_at: date}),
        knex('box').insert({id: 2, type: 'Produce', package_id: 1, grocery_id: 2, created_at: date}),
        knex('box').insert({id: 3, type: 'Dairy', package_id: 2, grocery_id: 3, created_at: date}),
        knex('box').insert({id: 4, type: 'Produce', package_id: 2, grocery_id: 4, created_at: date}),
        knex('box').insert({id: 5, type: 'Baked Goods', package_id: 3, grocery_id: 5, created_at: date}),
        knex('box').insert({id: 6, type: 'Produce', package_id: 3, grocery_id: 1, created_at: date}),
        knex('box').insert({id: 7, type: 'Baked Goods', package_id: 4, grocery_id: 2, created_at: date}),
        knex('box').insert({id: 8, type: 'Baked Goods', package_id: 4, grocery_id: 3, created_at: date}),
        knex('box').insert({id: 9, type: 'Dairy', grocery_id: 4, created_at: date}),
        knex('box').insert({id: 10, type: 'Produce', grocery_id: 5, created_at: date}),
        knex('box').insert({id: 11, type: 'Dairy', grocery_id: 1, created_at: date}),
        knex('box').insert({id: 12, type: 'Baked Goods', grocery_id: 2, created_at: date}),
        knex('box').insert({id: 13, type: 'Produce', grocery_id: 3, created_at: date})
      ]);
    });
};
