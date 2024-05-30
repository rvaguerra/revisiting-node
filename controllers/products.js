const path = require('path');
const productsRepository = require('../repositories/product');

class ProductController {
    async index(_, res, next) {
        try {
            return res.json(await productsRepository.index());
        } catch (error) {
            next(error);
        }
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

    async store(req, res, next) {
        try {
            const name = req.body?.['product-name'] || '';
            const product = await productsRepository.store({ name });
            return res.json(product);
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        try {
            const index = req.params.id;
            return res.json(await productsRepository.show(index));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProductController();
