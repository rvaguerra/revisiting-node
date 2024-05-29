const Product = require('../models/product');

const products = [];

class ProductRespository {
    index() {
        return products;
    }

    store({ name }) {
        if (!name) {
            throw new Error('Name is required');
        }

        products.push(new Product(name));
    }
}

module.exports = ProductRespository;
