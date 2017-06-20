const http = require('http');
const hostname = '0.0.0.0';
const port = 8080;
http.createServer(function(reg,res)  {
    res.writeHead(200,{ 'Content-Type': 'text/html'});
    res.end('Hello World\n');
}).listen(port,hostname,()=> {
    console.log('Server run');
});
