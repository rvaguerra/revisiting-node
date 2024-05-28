const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
    return res.send('Home');
});

app.get('/add-product', (req, res) => {
    return res.send('<form method="POST" action="/add-product"><input type="text" name="product-name"><button type="submit">Add</button></form>');
});

app.post('/add-product', (req, res) => {
    return res.send(req.body);
})

app.get('/about', (_, res) => {
    return res.send('About page!');
});

app.listen(8080);
