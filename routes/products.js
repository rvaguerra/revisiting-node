const express = require('express');
const productsController = require('../controllers/products')

const router = express.Router();

router.get('/', productsController.index);
router.get('/create', productsController.create);
router.post('/', productsController.store);
router.get('/:id', productsController.show);

module.exports = router;
