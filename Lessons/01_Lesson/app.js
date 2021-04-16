const fs = require('fs');

//reading files
//asynchronous doesnt hold up the rest of the javascript
fs.readFile('./sample.txt', (err, data)=>{		//args: (relative path to file, function to use on file read)
	if(err){
		console.log(err);
	}else{
		console.log(data.toString());
	}
});			

//writing files: this will replace the file text NOT add onto
fs.writeFile('./sample.txt', 'Hello World', () =>{
	console.log("File was written");
});

//If the file doesnt exist then it is created for us
fs.writeFile('./sample2.txt', 'Hello World', () =>{
	console.log("File was written");
});


//directories
if(!fs.existsSync('./assets')){
	fs.mkdir('./assets', (err)=>{
		if(err){
			console.log(err);
		}else{
			console.log("Folder created");
		}
	});
}else{
	fs.rmdir('./assets', (err)=>{
		if(err){
			console.log(err);
		}else{
			console.log("Directory was removed");
		}
	});	
}

//deleting files
if(fs.existsSync('./sample2.txt')){
	fs.unlink('./sample2.txt', (err)=>{
		if(err){
			console.log(err);
		}else{
			console.log("File deleted");
		}
	});
}