let compareNumber = 16;
const main = document.querySelector("#main");
const cells = document.querySelector("button");

createDivs();

function createDivs() {
  for (let i = 0; i < compareNumber; i++) {
    const row = document.createElement("div");
    let cellSize = (502 / compareNumber) - 2;
    row.classList.add("row");
    main.appendChild(row);
    for (let g = 0; g < compareNumber; g++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
      column.style.width = cellSize + "px";
      column.style.height = cellSize + "px";
      console.log(column.style.width);
      column.addEventListener("mouseenter", () => {
        column.style.backgroundColor = "#96DED1";
      });
    }
  }
}

cells.addEventListener("click", () => {
  compareNumber = parseInt(prompt("Enter a Value", "0"));
  if (compareNumber > 0 && compareNumber < 100) {
    removeDivs();
  } else {
    alert("Wrong input!");
  }
});

function removeDivs() {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  createDivs();
}
