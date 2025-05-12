SIZE = 16;

let containerOfDivs = document.querySelector(".container");
for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
        let div = document.createElement("div");
        containerOfDivs.appendChild(div);
        div.classList.add("square")
    }
}
