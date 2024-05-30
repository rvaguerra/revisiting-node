import { Product } from '../models/product';
import db from '../mysql-db/mysqlprovider';

class ProductRespository {
    async index() {
        const [products] = await db.execute('SELECT * from `products`;');
        return products;
    }

    async store({ name }: { name: string }) {
        if (!name) {
            throw new Error('Name is required');
        }

        await db.execute(`INSERT INTO \`products\` (name) VALUES ('${name}');`);

        const product = new Product(name);
        return product;
    }

    async show(id: number) {
        const [product] = await db.execute(`SELECT * from \`products\` WHERE id = ${id};`);
        if (!product) {
            throw new Error('Not found');
        }
        return product;
    }
}

export default new ProductRespository();
