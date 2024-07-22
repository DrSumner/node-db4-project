/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('steps').truncate()
    .then(function () {
      // add data into insert
      return knex('steps').insert([
        { 
          step_number: 1,
           step_instructions: "Put a large saucepan on a medium heat",
          recipe_id: 1, },
           {
            step_number: 2,
           step_instructions: "Add 1 tbsp olive oil",
           recipe_id: 1,
           }
    
      ]);
    });
};