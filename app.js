const http = require('http');

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/about') {
        res
            .setHeader('Content-Type', 'application/json')
            .write(JSON.stringify({ page: 'About' }));
        return res.end();
    }

    if (url === '/login' && method === 'POST') {
        const body = [];
        req
            .on('data', (chunk) => body.push(chunk))
            .on('end', () => {
                const { username, password } = JSON.parse(Buffer.concat(body).toString());
                const result = username === 'username' && password === 'password';

                res
                    .setHeader('Content-Type', 'application/json')
                    .write(JSON.stringify({ result }));
                return res.end();
            });
        return;
    }

    res
        .setHeader('Content-Type', 'application/json')
        .write(JSON.stringify({ page: 'Home' }));
    return res.end();
});

server.listen(8080);
