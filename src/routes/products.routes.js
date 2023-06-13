const { newItemData, getProducts, loadThumbail, editProducts } = require('../controllers/products.controller');
const tokenAuth = require('../middlewares/auth.middleware');
const { uploadProductImgs} = require('../utils/imgLoader');
const { Router } = require('express')

const router = Router();

router.post('/products', tokenAuth, newItemData);

router.put('/products/:id/images', tokenAuth, uploadProductImgs, loadThumbail)

router.put('/products/:id', tokenAuth, editProducts);

router.get('/products', getProducts);

module.exports = router
