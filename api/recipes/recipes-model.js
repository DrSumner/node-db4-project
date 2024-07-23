const db = require('../../data/db-config')

function getRecipeById(recipe_id) {
    return db('recipes as r')
    .select('r.*', 's.*', 'i.*', 'si.quantity')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
    .where('r.recipe_id', recipe_id)
    .orderBy('r.recipe_id', 'asc')
    .then(rows => {
        if(rows.length <= 0){return null}
       
        const recipe = {
            recipe_id: rows[0].recipe_id,
            recipe_name: rows[0].recipe_name,
            created_at: rows[0].created_at,
            steps: []
        }

        rows.forEach(row => {
            let step = recipe.steps.find(s => s.step_id === row.step_id)
            if(!step){
                step = {
                    step_id: row.step_id,
                        step_number: row.step_number,
                        step_instructions: row.step_instructions,
                        ingredients: []
                }
               recipe.steps.push(step) 
            }
            
            if(row.ingredient_id) {
                step.ingredients.push({
                    ingredient_id: row.ingredient_id,
                    ingredient_name: row.ingredient,
                    quantity: row.quantity,
                })
            }
        })


       return recipe
    })
}

module.exports = {
    getRecipeById,
}