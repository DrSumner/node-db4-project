/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments('recipe_id')
    tbl.text('recipe_name', 128)
    .notNullable()
    .unique()
    tbl.timestamp('created_at')
    .defaultTo(knex.fn.now());
})
.createTable('steps', tbl => {
    tbl.increments('step_id')
    tbl.integer('step_number')
    .notNullable()
    .unsigned()
    tbl.text('step_instructions')
    .notNullable()
    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe_id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
})
.createTable('ingredients', tbl => {
    tbl.increments('ingredient_id')
    tbl.text('ingredient', 128)
    .notNullable()
    .unique()
})
.createTable('step_ingredients', tbl => {
    tbl.integer('step_id')
    .notNullable()
    .unsigned()
    .references('step_id')
    .inTable('steps')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    tbl.integer('ingredient_id')
    .notNullable()
    .unsigned()
    .references('ingredient_id')
    .inTable('ingredients')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    tbl.decimal('quantity', 8, 3)
    .notNullable()
    .unsigned()
    tbl.primary(['step_id', 'ingredient_id'])
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
