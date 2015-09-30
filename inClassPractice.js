//Practice Exercises for the day.

/*
	Synchronous
	\------A-------\ \-------B------\ \-----C------\

	Asyncranous

	\------A------\
	  \------B------\
	  	\--------c------\

IIFE - immediately invoked function. Self wrapped functions. 

(function name(){
	var name = "josh";
	return "Dustin";
}) ();




*/

//Usual CB Syntax

// This is where "name" is defined: 
var name = function(cb) {
	alert(cb("Hello World"));
};

// We are only invoking "name" here: 
name(function(str) {
	return str;
});




//Format for answers




//code here for myName



myName(name, function(nameString) {
   console.log(nameString); 
});






//code here for myName
function myName(nombre, myFunc){
    return myFunc(nombre);
}


myName(name, function(nameString) {
   console.log(nameString); 
});

