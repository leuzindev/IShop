const { Router } = require('express');

const ProductsController = require('../product/product.controller')


const router = Router();


router.get('/products', ProductsController.getAllProducts)
router.get('/products/:id', ProductsController.getProduct)
router.get('/products/1/:name', ProductsController.getProductByName)

router.delete('/products/:id', ProductsController.deleteProduct)

router.post('/products', ProductsController.createProduct)

router.put('/products/:id', ProductsController.alteraProduto)

module.exports = router;