import express from 'express';
import path from 'path';
import productsRouter from './routes/products';

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

