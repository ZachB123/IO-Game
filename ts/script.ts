
//Classes
class Point {
    constructor(
        public x: number,
        public y: number,
    ){}
}

class Player{
    constructor(
        public location: Point,
        public name: string,
        public color: string,
        public score: number = 0
    ) {
    }
}

//globale variable here
let canvas: HTMLCanvasElement;
let screenWidth = 200;
let screenHeight = 200;
let ctx: CanvasRenderingContext2D;
const PI2 = 2 * Math.PI;
const PI = Math.PI;

//init
{
    let tempCanvas: HTMLCanvasElement | null = document.querySelector("#game");
    if(tempCanvas !== null) {
        canvas = tempCanvas;
        ctx = canvas.getContext("2d")!;
        init();
    } else {
        alert("Need to enable JavaScript or something else has gone wrong");
    }
}

//functions
function init(): void {
    handleResize();
    startGame();
}


function handleResize(): void {
    screenWidth = document.documentElement.clientWidth;
    screenHeight = document.documentElement.clientHeight;
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

addEventListener("resize", handleResize);

function startGame(): void {
    let player = new Player(new Point(0, 0), "Player1", "red");
    console.log(player);
    ctx.fillStyle = "green";
    drawShape(100,100,PI2/6,50,3);
    drawShape(200,100,PI2/6,50);
    drawShape(300,100,PI2/6,50,5);
    addEventListener("pointermove", drawPlayer);
}
function drawPlayer(e: PointerEvent): void {
    let x = e.clientX;
    let y = e.clientY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let angle: number;
    if(x > screenWidth/2) {
        //q 1 or 4
        angle = Math.atan(((screenHeight/2 - y) / (x - screenWidth/2)));
    } else {
        angle = Math.atan(((screenHeight/2 - y) / (x - screenWidth/2))) + PI;
    }

    drawShape(screenWidth/2, screenHeight/2, angle, 100, 3);
}

function drawShape(x: number, y: number, angle: number, radius: number, sides?: number,): void {
    if(!sides || sides == 0) {
        ctx.beginPath();
        ctx.arc(x,y,radius,0,PI2,false);
        ctx.fill();    
        return;
    }
    else if(sides <= 2) {sides = 3;}
    ctx.beginPath();
    ctx.moveTo(radius * Math.cos(angle) + x, radius * Math.sin(-angle) + y);
    for(let i = angle; i <= PI2 + angle; i += PI2/sides) {
        ctx.lineTo(radius * Math.cos(i) + x, radius * Math.sin(-i) + y);
    }
    ctx.fill();
}
