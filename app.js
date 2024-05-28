const express = require('express');

const app = express();

app.get('/', (_, res) => {
    return res.send('Home');
});

app.get('/about', (_, res) => {
    return res.send('About page!');
});

app.listen(8080);
