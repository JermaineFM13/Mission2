"use strict";
console.log("what are you doing in my backend step-bro?")

document.body.style.color = "black";
document.getElementById("left").style.backgroundColor = "white";
document.getElementById("right").style.backgroundColor = "rgb(210, 210, 210)";
document.body.style.backgroundColor = "rgb(210, 210, 210)";
// lightMode = false;
let lightMode = true;
function switchMode() {
  if (lightMode = true) {
    document.getElementById("ModeText").innerHTML = "Switch to light mode";
    document.body.style.color = "white";
    document.getElementById("left").style.backgroundColor = "rgb(75, 75, 75)";
    document.getElementById("right").style.backgroundColor = "rgb(50, 50, 50)";
    document.body.style.backgroundColor = "rgb(50, 50, 50)";
    lightMode = false;
  } else {
    document.getElementById("ModeText").innerHTML = "Switch to dark mode";
    document.body.style.color = "black";
    document.getElementById("left").style.backgroundColor = "white";
    document.getElementById("right").style.backgroundColor =
    "rgb(210, 210, 210)";
    document.body.style.backgroundColor = "rgb(210, 210, 210)";
    lightMode = true;
  }
}