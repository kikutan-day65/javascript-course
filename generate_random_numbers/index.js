
/*
// Generate random numbers 1 ~ 6
let x = Math.floor(Math.random() * 6) + 1

// Generate random numbers 1 ~ 10
let y = Math.floor(Math.random() * 10) + 1

// Generate random numbers 1 ~ 20
let z = Math.floor(Math.random() * 20) + 1

console.log(x)
console.log(y)
console.log(z)
*/

let num

document.getElementById("submit").onclick = function() {

    num = document.getElementById("range").value
    num =  Math.floor(Math.random() * num) + 1
    document.getElementById("generatedNum").innerHTML = "Generated: " + num
    
}

