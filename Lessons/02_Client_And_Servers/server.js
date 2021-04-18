const http = require('http');

//Server created
const server = http.createServer((req,res) => {
	console.log("Request made");
	console.log(req.url, req.method);

	
	//set header content type for regular text
	res.setHeader('Content-Type', 'text/plain');
	//write content 
	res.write("Hello World");
	//end response to send to browser
	res.end()
	
	/*
	//set header content type for HTML
	res.setHeader('Content-Type', 'text/html');
	res.write("<p>HELLO FROM HTML</p>");
	res.end();
	*/
}); 

//listening
server.listen(3000, 'localhost', () => {
	console.log("listening for requests on localhost:3000");
})