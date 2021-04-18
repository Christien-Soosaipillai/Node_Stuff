const fs = require('fs');

//reading files
//asynchronous doesnt hold up the rest of the javascript
fs.readFile('./files/sample.txt', (err, data)=>{		//args: (relative path to file, function to use on file read)
	if(err){
		console.log(err);
	}else{
		console.log(data.toString());
	}
});			

//writing files: this will replace the file text NOT add onto
fs.writeFile('./files/sample.txt', 'Hello World', () =>{
	console.log("File was written");
});

//If the file doesnt exist then it is created for us
fs.writeFile('./files/sample2.txt', 'Hello World', () =>{
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
if(fs.existsSync('./files/sample2.txt')){
	fs.unlink('./files/sample2.txt', (err)=>{
		if(err){
			console.log(err);
		}else{
			console.log("File deleted");
		}
	});
}

//File Streams
//readStream
const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf-8'});

rs.on('data', (chunk) =>{
	console.log("----new chunk----");
	console.log(chunk);
});

//write stream
const ws = fs.createWriteStream('./files/writing.txt');
const count = 1000;

for(let i = 0; i < count; i++){
	// ws.write("\nIteration\n");
	ws.write(i+"\n");
}

//pipe: take everything from readstream and send to writestream
rs.pipe(ws);

