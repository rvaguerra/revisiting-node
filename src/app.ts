import express from 'express';
import path from 'path';
import 'reflect-metadata';
import mongodb from './data/mongodb';
import mysqldb from './data/mysqldb';
import productsRouter from './routes/products';
import { retry } from './utils/retry';

const DATABASE_RETRIES = 20;
const DATABASE_WAIT = 1000;

(async () => {
    await retry(async () => { await mysqldb.initialize(); }, DATABASE_RETRIES, DATABASE_WAIT);
    await retry(async () => {
        await mongodb.connect();
        mongodb.db("admin").command({ ping: 1 });
    }, DATABASE_RETRIES, DATABASE_WAIT);

    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use('/products', productsRouter);

    app.get('/', (_, res) => {
        return res.send('Home');
    });

    app.get('/about', (_, res) => {
        return res.send('About page!');
    });

    app.use((_, res) => {
        return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    });

    app.listen(8080);

    console.log('Listening...');
})();
