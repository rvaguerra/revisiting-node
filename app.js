const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/about') {
        res
            .setHeader('Content-Type', 'application/json')
            .write(JSON.stringify({ page: 'About' }));
        return res.end();
    }

    res
        .setHeader('Content-Type', 'application/json')
        .write(JSON.stringify({ page: 'Home' }));
    return res.end();
});

server.listen(8080);
