const path = require('path');
const productsRepository = require('../repositories/product');

class ProductController {
    index(_, res) {
        return res.json(productsRepository.index());
    }

    create(_, res) {
        return res.sendFile(
            path.join(
                __dirname,
                '..',
                'views',
                'products',
                'products.create.html'
            )
        );
    }

    store(req, res) {
        const name = req.body?.['product-name'] || '';
        const product = productsRepository.store({ name });
        return res.json(product);
    }

    show(req, res) {
        const index = req.params.id;
        return res.json(productsRepository.show(index));
    }
}

module.exports = new ProductController();
