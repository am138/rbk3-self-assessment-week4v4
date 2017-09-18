//Fill in vars here
var pathname=requer('requesthandler')
/* Missing require statment */
var path=require('path')
 /* Missing require statment */
var fs=require('fs')
= /* Missing require statment */

http.createServer(function (request, response) {
 var path = url.parse(request.url, true).pathname;

 if (request.method === 'POST') {
   /*========YOUR CODE HERE=========*/
  if (path === '/highfive'){
  	//we will write in the file 
  	response.writeHead(200,{'Content-Type':'jpg'});
  	  fs.writeFile(__dirname + '/highfive.jpg', function(err, data){
       if(err) console.log(err);
       response.end(data);
     }
  }
     if(path === '/lowfive'){
    	//we will write in the file
    	response.writeHead(200,{'Content-Type':'jpg'});
      fs.writeFile(__dirname + '/lowfive.jpg', function(err, data){
       if(err) console.log(err);
       response.end(data);
     }
    }
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