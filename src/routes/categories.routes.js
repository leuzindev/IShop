const { Router } = require('express');

const CategoryController = require('../category/categories.controller')


const router = Router();


router.get('/categories', CategoryController.getAllCategories)
router.get('/categories/:id', CategoryController.getCategory)
router.get('/categories/1/:name', CategoryController.getCategoryByName)  // ARRUMAR

router.post('/categories', CategoryController.createCategory)

router.delete('/categories/:id', CategoryController.deleteCategory)

router.put('/categories/:id', CategoryController.updateCategory)


module.exports = router;