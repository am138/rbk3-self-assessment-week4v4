//Fill in vars here
var http = require('http')

var path = require('path');

var fs =require('fs');



http.createServer(function (request, response) {
 var path = url.parse(request.url, true).pathname;

 if (request.method === 'POST') {



 	response.writeHead(200,{'Content-Type':'text/html'});
     fs.writeFile(__dirname + '/index.html', function(err, data){
       if(err) console.log(err);
       response.end(data);

   /*========YOUR CODE HERE=========*/
 }



  else if (request.method === 'GET') {
   if(path === '/'){
     response.writeHead(200,{'Content-Type':'text/html'});
     fs.readFile(__dirname + '/index.html', function(err, data){
       if(err) console.log(err);
       response.end(data);
     });
   }
 } else {
   response.end(404);
 }

}).listen(8080, '127.0.0.1');

console.log('Listening...');