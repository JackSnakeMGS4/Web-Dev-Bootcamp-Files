let greeting = "Hello, ";
let ageStatement = "You are ";

let userInfo = {
	name: prompt("What is your name?"),
	age: parseInt(prompt("What is your age?"))
};

alert(greeting + userInfo.name + ". " 
	+ ageStatement + userInfo.age + ".");