
let canvas: HTMLCanvasElement;
let screenWidth = 200;
let screenHeight = 200;

{
    let tempCanvas: HTMLCanvasElement | null = document.querySelector("#game");
    if(tempCanvas !== null) {
        canvas = tempCanvas;
        init();
    } else {
        alert("Need to enable JavaScript or something else has gone wrong");
    }
}

function init(): void {
    handleResize();
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
