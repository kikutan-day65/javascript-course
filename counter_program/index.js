let num = 0

document.getElementById("decrease").onclick  = function() {
    num--
    document.getElementById("counter").innerHTML = num
}

document.getElementById("reset").onclick  = function() {
    num = 0
    document.getElementById("counter").innerHTML = num
}

document.getElementById("increase").onclick  = function() {
    num++
    document.getElementById("counter").innerHTML = num
}

