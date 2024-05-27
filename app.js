const http = require('http');

const server = http.createServer((req, res) => {
    res
        .setHeader('Content-Type', 'application/json')
        .write(JSON.stringify({ page: 'Home' }));
    return res.end();
});

server.listen(8080);
