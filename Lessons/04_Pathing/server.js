/*
	Status Codes:

	200 - Ok
	300 - Resource Moved
	404 - Not Found
	500 - Internal Server Error

	Status Code Ranges:
	
	100 Range - Informational Reponses
	200 Range - Success Codes
	300 Range - Codes for Redirect
	400 Range - User or Client Error Codes
	500 Range - Server Error Codes 
*/

const http = require('http');
const fs = require('fs');

//specify the content to be loaded on server creation
const server = http.createServer( (req,res) => {
	console.log("Request made");
	console.log(req.url, req.method);

	let path = './resources/';

	//NOT USING EXPRESS
	switch(req.url){
		case '/':
			path += "home.html";
			res.statusCode = 200;
			break;
		case '/lorem':
			path+= "lorem.html";
			res.statusCode = 200;
			break;
		case '/lorem-ipsum':
			res.statusCode= 301;
			res.setHeader('Location', '/lorem'); 
			res.end();
			break;
		default:
			path+= "error.html";
			res.statusCode = 404;
			break;		 
	} 

	//1. set our headers
	res.setHeader('Content-Type', 'text/html');

	//2. send our html file if no errors found
	fs.readFile(path, (err, data)=>{
		if(err){
			console.log("Error Found: " + err);
			res.statusCode = 500;
			res.end();
		}else{
			//3. write content
			res.write(data);

			//4. end our response		
			res.end();
		}
	})
});

//specify the server startup
server.listen(3000, 'localhost', ()=>{
	console.log("listening for requests on localhost:3000");
})