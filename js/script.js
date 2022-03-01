"use strict";
let canvas;
{
    let tempCanvas = document.querySelector("#game");
    if (tempCanvas !== null) {
        canvas = tempCanvas;
        init();
    }
    else {
        alert("Need to enable JavaScript or something else has gone wrong");
    }
}
let screenWidth;
let screenHeight;
function init() {
    handleResize();
}
function handleResize() {
    screenWidth = document.documentElement.clientWidth;
    screenHeight = document.documentElement.clientHeight;
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}
addEventListener("resize", handleResize);