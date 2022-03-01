"use strict";
// import { Player } from './player.js';
// import { Point } from './Point.js';
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Player {
    constructor(location, name, color, score = 0) {
        this.location = location;
        this.name = name;
        this.color = color;
        this.score = score;
    }
}
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
    startGame();
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
function startGame() {
    let player = new Player(new Point(0, 0), "Player1", "red");
    console.log(player);
}
