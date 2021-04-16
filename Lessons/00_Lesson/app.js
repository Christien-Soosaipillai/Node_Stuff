//Accessing the people.js file
const people = require('./people');
const { ages } = require('./people');		//destructuring to specifically access ages array
console.log(ages);

setTimeout( ()=>{
	console.log("Current directory: " + __dirname);
}, 3000);
