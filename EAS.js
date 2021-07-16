const container = document.querySelector(".container")
const btnClear = document.querySelector('#clear');
btnClear.onclick = () => clearGrid();
let gridVal = document.getElementById('slider').value;
const gridInfo = document.getElementById("gridInfo")
gridInfo.textContent = `GRID SIZE:${gridVal}`

originalGrid()

function originalGrid() {
  let gridSize = document.getElementById('slider').value;
  container.style.cssText = `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`
  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    newDiv.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'black';
    });
    container.appendChild(newDiv);
  }


  let slider = document.getElementsByClassName("grid")
  slider.addEventListener('input', function () {
    clearGrid();
    let gridSize = document.getElementById('slider').value;
    originalGrid(gridSize * gridSize);
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`
  })
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  originalGrid();
}



