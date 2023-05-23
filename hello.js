var http =  require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function(req,res){
	var q = url.parse(req.url,true);
	console.log(q.pathname);
	var fileName = "."+q.pathname;
	if(fileName == './'){
		fileName = './index';
	}
	fileName = fileName +".html";
	fs.readFile(fileName,function(err,data){
		if(err){
			res.writeHead(404,{'Content-Type':'text/html'});
			return res.end("404 Not Found");
		}
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(data);
	console.log("...Incoming Request: "+req.url);
	res.end();
})
}).listen(8080);

console.log("Server listening on port 8080....");