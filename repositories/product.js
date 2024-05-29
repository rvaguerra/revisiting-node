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

        const product = new Product(name);
        products.push(product);
        return product;
    }

    show(index) {
        if (isNaN(index) || index < 0 || index >= products.length) {
            throw new Error('Not found');
        }

        return products[index];
    }
}

module.exports = ProductRespository;
