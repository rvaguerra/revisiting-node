const path = require('path');

const products = [];

const index = (_, res) => {
    return res.json(products);
};

const create = (_, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'products', 'products.create.html'));
};

const store = (req, res) => {
    const productName = req.body?.['product-name'] || '';
    if (productName) {
        products.push(productName);
    }
    return res.redirect('/products');
};

module.exports = {
    index,
    create,
    store,
};
