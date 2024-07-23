const recipes = require('./recipes-model')

const checkRecipeId = (req, res, next) => {
    const {id} = req.params
    recipes.getRecipeById(id)
    .then(recipe => {
        if(recipe && Object.keys(recipe).length > 0){ next()}
        else
        res.status(400).json({message:`recipe with recipe_id ${id} not found`})
    })
    .catch(err => res.status(err.status || 500).json({
        Location: 'something went horribly wrong! -Dave Chapelle',
        message: err.message,
        stack: err.stack,
      }))
};



module.exports = {checkRecipeId,}