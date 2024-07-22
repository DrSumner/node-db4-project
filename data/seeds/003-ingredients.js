/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('ingredients').truncate()
    .then(function () {
      // add data into insert
      return knex('ingredients').insert([
        { ingredient: 'olive oil', },
    
      ]);
    });
};
