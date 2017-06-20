var  http  =  require("http");
var  fs  =  require('fs');
var  url  =  require("url");
var  path  =  require('path');
var  mimeTypes  =   {
    '.js' :   'text/javascript',
    '.html':   'text/html',
    '.css' :   'text/css',
    '.jpg' :   'image/jpeg',
    '.gif' :   'image/gif'
};
http.createServer(function  onRequest(request,  response)  {
    var  postData  =  "";
    var  pathname  =  url.parse(request.url).path;
    if (pathname  ===  '/') pathname  =  '/index.html';
    pathname  =  pathname.substring(1,  pathname.length);
    fs.readFile (pathname,  'utf8',  function  (err,  data)  {
            if  (err)  {
                console.log(  'Could not find or open file '   + pathname  + ' for reading\n ');
            } else  {
                response.writeHead(200, {
                    'Content-Type': mimeTypes[path.extname(pathname)]});
                response.end(data);
            }}
    );
}).listen(8080);
