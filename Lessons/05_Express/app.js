const express = require('express');

//express app
const app = express();

// listen for requests
app.listen(3000, 'localhost', ()=>{
	console.log("listening for requests on localhost:3000");
});

app.get('/', (req, res)=>{
	res.sendFile('./resources/home.html', {root: __dirname });	//2 arguments (1st: path of file, 2nd: object where you can specify root directory)
});

app.get('/lorem', (req, res)=>{
	res.sendFile('./resources/lorem.html', {root: __dirname });
});

//Redirect
app.get('/home', (req, res) =>{
	res.redirect('/');
})

//404
app.use((req,res)=>{
	res.status(404).sendFile('./resources/error.html', {root: __dirname })
})	//creates middleware and fires middleware functions

