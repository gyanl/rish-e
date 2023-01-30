var i = 0;
var typeBox = document.getElementById("typewriter");
var txt = typeBox.innerHTML;
typeBox.innerHTML = "";
var speed = 30; /* The speed/duration of the effect in milliseconds */

function typeWriter(){
    if (i < txt.length) {
        typeBox.innerHTML += txt.charAt(i);
        if (txt.charAt(i) == ".") 
        {
            speed = 240;
        } else {
            speed = 30;
        }
        i++;
        setTimeout(typeWriter, speed);
        
      }
}

console.log("to");

window.onload = typeWriter;

