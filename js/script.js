"use strict";
//globale variable here
let canvas;
let screenWidth = 200;
let screenHeight = 200;
let context;
//init
{
    let tempCanvas = document.querySelector("#game");
    if (tempCanvas !== null) {
        canvas = tempCanvas;
        context = canvas.getContext("2d");
        init();
    }
    else {
        alert("Need to enable JavaScript or something else has gone wrong");
    }
}
//functions
function init() {
    handleResize();
    context.fillStyle = "black";
    context.fillRect(0, 0, 50, 50);
}
function handleResize() {
    screenWidth = document.documentElement.clientWidth;
    screenHeight = document.documentElement.clientHeight;
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    console.log(canvas.width);
    console.log(canvas.height);
}
addEventListener("resize", handleResize);
