const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.write('<h1>This is Home Page</h1>');
    }
    if (req.url == '/about') {
        res.write('<h1>This is About Page</h1>');
    }
    if (req.url == '/contact') {
        res.write('<h1>This is Contact Page</h1>');
    }
    if (req.url == '/file-write') {
        res.write('<h1>This is File Write Page</h1>');
        res.write('<p>Please check root directory there should be new file called <strong>"demo.txt"</strong></p>');
        fs.writeFile('demo.txt', 'Hello World!', (err) => {
            if (err) throw err;
            console.log('File written successfully!');
        });
    }
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});