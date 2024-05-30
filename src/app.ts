import express from 'express';
import path from 'path';
import 'reflect-metadata';
import db from './data/datasource';
import productsRouter from './routes/products';
import { retry } from './utils/retry';

const DATABASE_RETRIES = 20;
const DATABASE_WAIT = 1000;

(async () => {
    await retry(async () => { await db.initialize(); }, DATABASE_RETRIES, DATABASE_WAIT);

    const app = express();
    app.use(express.urlencoded({ extended: false }));

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
