import { DataSource } from 'typeorm';
import { Product } from '../entities/product.entity';
import db from '../data/datasource';

class ProductRespository {
    constructor(private dataSource: DataSource) { }

    async index() {
        return await this.dataSource.getRepository(Product).find();
    }

    async store({ name }: { name: string }) {
        return await this.dataSource.getRepository(Product).save({ name });
    }

    async show(id: number) {
        return await this.dataSource.getRepository(Product).findOneByOrFail({ id });
    }
}

export default new ProductRespository(db);
