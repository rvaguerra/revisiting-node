const express = require('express');
const http = require('http');

const app = express();

app.route('/').get((_, res) => {
    return res.send('Home');
});

app.route('/about').get((_, res) => {
    return res.send('About page!');
});

http.createServer(app).listen(8080);
