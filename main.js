// Default Values.
const DEFAULT_SIZE = 32;
const DEFAULT_COLOR = "#e1e1e1";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = "";

function changeSize(size) {
    currentSize = size;
}

function changeColor(color) {
    currentColor = color;
}

function changeMode(mode) {
    currentMode = mode;
}


// Variables.
const inputSize = document.querySelector("#range");
const inputColor = document.querySelector("#colorPicker");

const colorMode = document.querySelector(".color-btn");
const rainbowMode = document.querySelector(".rainbow-btn");
const grayMode = document.querySelector(".gray-btn");
const eraserMode = document.querySelector(".eraser-btn");

const reset = document.querySelector(".reset");

// Listeners.
inputColor.addEventListener("input", (e) => changeColor(e.target.value));
inputSize.addEventListener("input", (e) => changeSize(+e.target.value))

colorMode.addEventListener("click", () => changeMode("color"));
rainbowMode.addEventListener("click", () => changeMode("rainbow"));
grayMode.addEventListener("click", () => changeMode("gray"));
eraserMode.addEventListener("click", () => changeMode("eraser"));

// reset.addEventListener("click", reset());


// Creates the grid.

let containerOfDivs = document.querySelector(".container");
for (let row = 0; row < currentSize; row++) {
    let row = document.createElement("div");
    row.classList.add("row");
    containerOfDivs.appendChild(row);
    for (let col = 0; col < currentSize; col++) {
        let square = document.createElement("div");
        square.classList.add("square")
        row.appendChild(square);
    }
}







