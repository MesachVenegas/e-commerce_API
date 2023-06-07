const { uploadProductImgs} = require('../utils/imgLoader');
const { newItemData, getProducts, loadThumbail } = require('../controllers/products.controller');
const { Router } = require('express')

const router = Router();

router.post('/products', newItemData);

router.post('/products/:id/images', uploadProductImgs, loadThumbail)

router.get('/products', getProducts);

module.exports = router
