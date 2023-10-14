let x = 3;
let y = 5;
let z = 9;

rounded_x = Math.round(x);
floored_x = Math.floor(x);
ceiled_x = Math.ceil(x);
powered_x = Math.pow(x, 2);
sqrt_x = Math.sqrt(x);
absolute_x = Math.abs(x);

let maximum = Math.max(x, y, z);
let minimum = Math.min(x, y, z);

let Pi = Math.PI;


// show in console
console.log(rounded_x);
console.log(floored_x);
console.log(ceiled_x);
console.log(powered_x);
console.log(sqrt_x);
console.log(absolute_x);

console.log(maximum);
console.log(minimum);

// show in html
document.getElementById("p1").innerHTML = "rounded: " + rounded_x;
document.getElementById("p2").innerHTML = "floored: " + floored_x;
document.getElementById("p3").innerHTML = "ceiled: " + ceiled_x;
document.getElementById("p4").innerHTML = "squared: " + powered_x;
document.getElementById("p5").innerHTML = "sqrt: " + sqrt_x;
document.getElementById("p6").innerHTML = "absolute: " + absolute_x;

document.getElementById("p7").innerHTML = "max: " + maximum;
document.getElementById("p8").innerHTML = "min: " + minimum;

document.getElementById("p9").innerHTML = "PI: " + Pi;
