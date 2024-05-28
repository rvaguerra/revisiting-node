const express = require('express');

const app = express();

app.route('/').get((_, res) => {
    return res.send('Home');
});

app.route('/about').get((_, res) => {
    return res.send('About page!');
});

app.listen(8080);
