// Default Values.
const DEFAULT_SIZE = 32;
const DEFAULT_COLOR = "#1e1e1e";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = "";


function changeSize(size) {
    containerOfDivs.textContent = "";
    currentSize = size;
    createBoard();
}

function changeColor(color) {
    currentColor = color;
}

function changeMode(mode) {
    currentMode = mode;
    if (currentMode == "color") {
        colorMode.classList.add("active");
        rainbowMode.classList.remove("active");
        grayMode.classList.remove("active");
        eraserMode.classList.remove("active");
    } else if (currentMode == "rainbow") {
        colorMode.classList.remove("active");
        rainbowMode.classList.add("active");
        grayMode.classList.remove("active");
        eraserMode.classList.remove("active");
    } else if (currentMode == "gray") {
        colorMode.classList.remove("active");
        rainbowMode.classList.remove("active");
        grayMode.classList.add("active");
        eraserMode.classList.remove("active");
    } else {
        colorMode.classList.remove("active");
        rainbowMode.classList.remove("active");
        grayMode.classList.remove("active");
        eraserMode.classList.add("active");
    }
}


// Variables.
const inputSize = document.querySelector("#range");
const inputColor = document.querySelector("#colorPicker");

const colorMode = document.querySelector(".color-btn");
const rainbowMode = document.querySelector(".rainbow-btn");
const grayMode = document.querySelector(".gray-btn");
const eraserMode = document.querySelector(".eraser-btn");

const reset = document.querySelector(".reset-btn");


// Listeners.
inputColor.addEventListener("input", (e) => changeColor(e.target.value));
inputSize.addEventListener("input", (e) => changeSize(+e.target.value));

colorMode.addEventListener("click", () => changeMode("color"));
rainbowMode.addEventListener("click", () => changeMode("rainbow"));
grayMode.addEventListener("click", () => changeMode("gray"));
eraserMode.addEventListener("click", () => changeMode("eraser"));



// Creates the grid.
let containerOfDivs = document.querySelector(".container");

function createBoard() {
    for (let row = 0; row < currentSize; row++) {
        let row = document.createElement("div");
        row.classList.add("row");
        containerOfDivs.appendChild(row);
        for (let col = 0; col < currentSize; col++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
}

// Added a listener to the container to paint its square children.
containerOfDivs.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        draw(e);
    }
});

// Clears the board.
reset.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(square => {
        square.style.backgroundColor = "#e2e2e2";
    });
});


function draw(e) {
    if (currentMode == "color") {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode == "rainbow") {
        e.target.style.backgroundColor = getRandomColor();
    } else if (currentMode == "gray") {
        darkenGray(e.target);
    } else {
        e.target.style.backgroundColor = "#e2e2e2";
    }
}

function darkenGray(target) {
    // Finds its opacity value or initializes it to 0.
    let currentOpacity = parseFloat(target.dataset.opacity) || 0;

    // Increment by 10% (0.1 in scale of 0 to 1).
    if (currentOpacity < 1) {
        currentOpacity += 0.1;
        target.dataset.opacity = currentOpacity; // Updates the attribute.
        target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
    }
}

function getRandomColor() {
    let getRed = Math.floor(Math.random() * 255);
    let getGreen = Math.floor(Math.random() * 255);
    let getBlue = Math.floor(Math.random() * 255);
    return `rgb(${getRed}, ${getGreen}, ${getBlue})`;
}

window.addEventListener("load", () => {
    createBoard();
})