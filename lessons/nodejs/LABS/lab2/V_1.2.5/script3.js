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
http.createServer(function onRequest(request,  response) {
var  pathname  =  url.parse(request.url).path;
if (pathname  == '/')  { 
    pathname  =  '/index.html';
}
var  extname  =  path.extname(pathname); console.log(extname);
var  mimeType  =  mimeTypes[path.extname(pathname)]; 
pathname  =  pathname.substring(1,  pathname.length);
if ( (extname  ==  ".gif")
      ||  (extname == ".jpg") )  {
    var  img  =  fs.readFileSync('./' + pathname);
    response.writeHead(200,   {'Content-Type':  mimeType });
    response.end(img,  'binary');
} 
else  {
    pathname  =  pathname.substring(1,  pathname.length);
    console.log(pathname);
    fs.readFile(pathname,  'utf8',  function (err  ,  data){
        if  (err)  {
            console.log('Could not lind or open lile ' +  pathname  +  ' for reading\n' );
        } 
        else  {
            console.log('pathnamet'  + mimeType);
            response.writeHead(200,   {
                'Content-Type':  mimeType
            });
            response.end(data);                         
        }   
    })
}
}).listen (8080);
  
