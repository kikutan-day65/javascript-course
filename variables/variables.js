// Declaration (var, let, const)
// Assignment

let age;
age = 25;
age += 1;

let firstname = "Haruto"
let student = false;

// display on the console
console.log("name:", firstname);
console.log("age: ", age);
console.log("enrolled:", student);

// display on the html
document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled " + student;


const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter teh radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);