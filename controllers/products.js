const path = require('path');
const ProductRespository = require('../repositories/product');

const productsRepository = new ProductRespository();

const index = (_, res) => {
    return res.json(productsRepository.index());
};

const create = (_, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'products', 'products.create.html'));
};

const store = (req, res) => {
    const name = req.body?.['product-name'] || '';
    const product = productsRepository.store({ name });
    return res.json(product);
};

const show = (req, res) => {
    const index = req.params['id'];
    return res.json(productsRepository.show(index));
}

module.exports = {
    index,
    create,
    store,
    show,
};
