const { newItemData, getProducts } = require('../controllers/products.controller');
const { Router } = require('express')

const router = Router();

router.post('/products', newItemData);

router.get('/products', getProducts);

module.exports = router
