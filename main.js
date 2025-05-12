const DEFAULT_SIZE = 16;
let inputSize = document.querySelector("#range").value;

let containerOfDivs = document.querySelector(".container");
for (let row = 0; row < DEFAULT_SIZE; row++) {
    let row = document.createElement("div");
    row.classList.add("row");
    containerOfDivs.appendChild(row);
    for (let col = 0; col < DEFAULT_SIZE; col++) {
        let square = document.createElement("div");
        square.classList.add("square")
        row.appendChild(square);
    }
}
