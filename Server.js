var dispatcher = require('httpdispatcher');
var http = require('http');

const PORT=8080;

dispatcher.setStatic('resources');

dispatcher.onGet("/page1", function(req, res) {
	res.writeHead(200, {'Contenet-Type': 'text/plain'});
	res.end('Page One');
});

dispatcher.onPost("/post1", function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Got Post Data');
});

function handleRequest(request, response) {
	try {
		console.log(request.url);
		dispatcher.dispatch(request, response);
	} catch(err) {
		console.log(err);
	}
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("Server listening on: http://localhost:%s", PORT);
});
