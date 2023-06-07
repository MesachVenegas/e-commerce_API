const { uploadProductImgs} = require('../utils/imgLoader');
const { newItemData, getProducts, loadThumbail, editProducts } = require('../controllers/products.controller');
const { Router } = require('express')

const router = Router();

router.post('/products', newItemData);

router.put('/products/:id/images', uploadProductImgs, loadThumbail)

router.put('/products/:id', editProducts);

router.get('/products', getProducts);

module.exports = router
