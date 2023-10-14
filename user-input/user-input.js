// EASY way with a window prompt
let username = window.prompt("What's your name?");

console.log(username);


// DIFFICULT way HTML textbox
document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " +  username;

}