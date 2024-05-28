const express = require('express');
const path = require('path');

const router = express.Router();

const products = [];

router.get('/', (_, res) => {
    return res.json(products);
})

router.get('/create', (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'product', 'product.create.html'));
});

router.post('', (req, res) => {
    const productName = req.body?.['product-name'] || '';
    if (productName) {
        products.push(productName);
    }
    return res.redirect('/product');
})

module.exports = router;
