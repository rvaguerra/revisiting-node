import { DataSource } from 'typeorm';
import db from '../data/datasource';
import { Product } from '../entities/product.entity';

class ProductRespository {
    constructor(private dataSource: DataSource) { }

    async index() {
        return await this.dataSource.getRepository(Product).find();
    }

    async store(product: Partial<Product>) {
        return await this.dataSource.getRepository(Product).save(product);
    }

    async show(id: number) {
        return await this.dataSource.getRepository(Product).findOneByOrFail({ id });
    }

    async patch(id: number, product: Partial<Product>) {
        await this.dataSource.getRepository(Product).update({ id }, product);
    }

    async delete(id: number) {
        return await this.dataSource.getRepository(Product).delete({ id });
    }
}

export default new ProductRespository(db);
