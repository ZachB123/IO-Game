
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
let context: CanvasRenderingContext2D;

//init
{
    let tempCanvas: HTMLCanvasElement | null = document.querySelector("#game");
    if(tempCanvas !== null) {
        canvas = tempCanvas;
        context = canvas.getContext("2d")!;
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
    console.log(canvas.width);
    console.log(canvas.height);
}

addEventListener("resize", handleResize);

function startGame(): void {
    let player = new Player(new Point(0, 0), "Player1", "red");
    console.log(player);
}
