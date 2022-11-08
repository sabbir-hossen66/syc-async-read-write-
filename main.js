const http = require('http');
const URL = require('url');
var server = http.createServer(function (req, res) {

    var myUrl = 'https://github.com/sabbir-hossen66?tab=repositories';
    var urlObj = URL.parse(myUrl, true)

    var hostName = urlObj.host;
    var pathName = urlObj.path;
    var searchName = urlObj.search;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(searchName);
    res.end()

    // if (req.url == '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     res.write('<h2>Hello Home page</h2>')
    //     res.end();
    // }
    // else if (req.url == '/about') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     res.write('<h2>Hello about page</h2>')
    //     res.end()
    // }

    // else if (req.url == '/contact') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     res.write('<h2>Hello contact page</h2>')
    //     res.end()
    // }

})


server.listen(5050)
console.log('start a server');