"use strict";
//Classes
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
let ctx;
const PI2 = 2 * Math.PI;
const PI = Math.PI;
//init
{
    let tempCanvas = document.querySelector("#game");
    if (tempCanvas !== null) {
        canvas = tempCanvas;
        ctx = canvas.getContext("2d");
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
}
addEventListener("resize", handleResize);
function startGame() {
    let player = new Player(new Point(0, 0), "Player1", "red");
    console.log(player);
    ctx.fillStyle = "green";
    drawShape(100, 100, PI2 / 6, 50, 3);
    drawShape(200, 100, PI2 / 6, 50);
    drawShape(300, 100, PI2 / 6, 50, 5);
    addEventListener("pointermove", drawPlayer);
}
function drawPlayer(e) {
    let x = e.clientX;
    let y = e.clientY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let angle;
    if (x > screenWidth / 2) {
        //q 1 or 4
        angle = Math.atan(((screenHeight / 2 - y) / (x - screenWidth / 2)));
    }
    else {
        angle = Math.atan(((screenHeight / 2 - y) / (x - screenWidth / 2))) + PI;
    }
    // angle = Math.atan(((screenHeight/2 - y) / (x - screenWidth/2)));
    drawShape(screenWidth / 2, screenHeight / 2, angle, 100, 3);
}
function drawShape(x, y, angle, radius, sides) {
    if (!sides || sides == 0) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, PI2, false);
        ctx.fill();
        return;
    }
    else if (sides <= 2) {
        sides = 3;
    }
    ctx.beginPath();
    ctx.moveTo(radius * Math.cos(angle) + x, radius * Math.sin(-angle) + y);
    for (let i = angle; i <= PI2 + angle; i += PI2 / sides) {
        ctx.lineTo(radius * Math.cos(i) + x, radius * Math.sin(-i) + y);
    }
    ctx.fill();
}
// let fillTriangle = (x: number, y: number, width: number, height: number, color: string): void => {
//     context.fillStyle = color;
//     context.beginPath();
//     context.moveTo(x, y);
//     context.lineTo(x + width, y);
//     context.lineTo(x + width / 2, y + height);
//     context.closePath();
//     context.fill();
// }
