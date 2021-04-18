const express = require('express');

const app = express();

//EJS : to set ejs we dont need to require it
app.set('view engine', 'ejs');		//originall ejs will looks for a folder named 'views'
app.set('views', 'resources');		//here I override the folder to be 'resources' instead of 'views'


//Start Server
app.listen(3000, 'localhost', ()=>{
	console.log("Server started on localhost:3000/");
});


//HOME
app.get('/home', (req,res)=>{
	// res.sendFile('./resources/home.html', {root: __dirname});	- Normal express call
	res.render('home', { title: "This Title", mainTitle: "Failsafe Server"}); 	//When using EJS we call ejs files like so
})

//Home - redirect
app.get('/', (req,res)=>{
	res.redirect('/home');
})