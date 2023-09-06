const http = require('http');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': "text/html"});

    const url = req.url;

    if (url === '/' || url === '/index') {
        readPage('./index.html').then((data) => {
            res.end(data);
        });
    } else if (url === '/about') {
        readPage('./about.html').then((data) => {
            res.end(data);
        });
    } else if (url === '/contact-me') {
        readPage('./contact-me.html').then((data) => {
            res.end(data);
        });
    } else {
        readPage('./404.html').then((data) => {
            res.end(data);
        });
    }

    
}).listen(port);

function readPage(page) {
    return new Promise((resolve, reject) => {
        fs.readFile(page, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    })
}