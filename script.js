console.log("Hello Javascript class!")

//Determining datatype using typeof
console.log(typeof(34.23))
console.log(typeof(-34.23))
console.log(typeof("My name is Nisha"))
console.log(typeof(true))

//Exploring the Date() object
console.log(new Date().getSeconds())

//Generating a random number between 0 and 1(not inclusive)
console.log(Math.random())

//Printing the document on the current window
//console.log(window.print())

//Retrieving the handle of the HTML document
console.log(window.document)

///////////// Unit 2 //////////////

/*
The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names cannot begin with a number
Names can also begin with $ and _ 
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names
*/



//Example of string concatenation
let name='Nisha Brijesh'
console.log(name)
// Concatenation operator
name=name + ' -Coding Instructor'
console.log(name)

//example of undefined
let country;
console.log(country);

//example of null
let region=null;
console.log(region);

// var variables and its issues
var count=5
console.log(count)
var count=10
console.log(count)
for(var count=15;count<20;count++){
  console.log(count)
}
console.log(count)

//let keyword to declare variables
let index=100
console.log(index)
index=200
console.log(index)

//const keyword - 1 time declaration 1 time assignment
const name1="Harry Potter"

//Examples of camel casing
//intCountOfClasses
//boolFlag
//strDeckOfCards

//Use of const to declare constant values
const pi = Math.PI;
console.log(pi)


// Global scope and block scope
let greeter = "hey there";
if (greeter) {
  let greeter = "Hola Amigo!";
  console.log(greeter)
}
console.log(greeter)

