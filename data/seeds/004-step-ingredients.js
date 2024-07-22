/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('step_ingredients').truncate()
    .then(function () {
      // add data into insert
      return knex('step_ingredients').insert([
        { step_id: 2, ingredient_id: 1, quantity: 0.014 },
    
      ]);
    });
};