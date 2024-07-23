const express = require('express')
const recipes = require('./recipes-model')
//const {} = require('./recipes-middleware')

const router = express.Router()

router.get('/:id', (req,res, next) => {
    const { id } = req.params
recipes.getRecipeById(id)
.then(recipes => {
    res.json(recipes)
})
.catch(next)
});



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router