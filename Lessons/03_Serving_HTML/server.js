const http = require('http');
const fs = require('fs');

//specify the content to be loaded on server creation
const server = http.createServer( (req,res) => {
	console.log("Request made");
	console.log(req.url, req.method);

	//1. set our headers
	res.setHeader('Content-Type', 'text/html');

	//2. send our html file if no errors found
	fs.readFile('./resources/home.html', (err, data)=>{
		if(err){
			console.log("Error: " + err);
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