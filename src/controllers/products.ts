import { NextFunction, Request, Response } from 'express';
import path from 'path';
import productsRepository from '../repositories/product';

export class ProductController {
    async index(_: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await productsRepository.index());
        } catch (error) {
            next(error);
        }
    }

    create(_: Request, res: Response) {
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

    async store(req: Request, res: Response, next: NextFunction) {
        try {
            const name = req.body?.['product-name'] || '';
            const product = await productsRepository.store({ name });
            return res.json(product);
        } catch (error) {
            next(error);
        }
    }

    async show(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            return res.json(await productsRepository.show(Number(id)));
        } catch (error) {
            next(error);
        }
    }

    async patch(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const name = req.body.name;
            await productsRepository.patch(Number(id), { name });
            return res.json({ message: 'OK' });
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            await productsRepository.delete(Number(id));
            return res.json({ message: 'OK' });
        } catch (error) {
            next(error);
        }
    }
}
