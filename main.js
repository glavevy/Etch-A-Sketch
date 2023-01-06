function createDivs() {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    main.appendChild(row);
    for (let g = 0; g < 16; g++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
      column.addEventListener("mouseenter", () => {
        column.style.backgroundColor =  'blue';
      });
    }
  }
}

const main = document.querySelector("#main");

console.log(createDivs());
