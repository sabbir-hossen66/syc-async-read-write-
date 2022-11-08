const { resolveSoa } = require('dns/promises');
const fs = require('fs');
const http = require('http');

var server = http.createServer(function (req, res) {

    if (req.url = '/') {
        var error = fs.writeFileSync('demo.txt', 'hello file sync')
        if (error) {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('file will fail')
        }
        else {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('file will success');
        }

    }

})
server.listen(7070);
console.log('node js is ok');