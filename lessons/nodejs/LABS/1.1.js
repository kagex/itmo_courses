var http = require( 'http'); // подключение модуля
http.createServer(function (request,response) {// вызов метода создания http сервера
        console.log("HTTP works!"); 
    });

http.listen(8080);
