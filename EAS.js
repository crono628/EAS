const container = document.querySelector(".container")
const gridInfo = document.querySelector("#gridInfo")
const btnClear = document.querySelector('#clear');
btnClear.onclick = () => clearGrid();
const colorChoices = document.querySelector('.btnContainer')
colorChoices.forEach((color)  => {
  color.addEventListener('click', function () {
    event.target.style.backgroundColor = 
  })
})




 

// console.log(color(event))
originalGrid()

function originalGrid() {
  let gridSize = document.querySelector('#slider').value;
  container.style.cssText = `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`
  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'grid');
    newDiv.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'black'
    });
    container.appendChild(newDiv);
  }
}


const slider = document.querySelector("#slider")
gridInfo.textContent = `GRID SIZE: ${slider.value} x ${slider.value}`
slider.oninput = function () {
  gridInfo.textContent = `GRID SIZE: ${slider.value} x ${slider.value}`
  originalGrid();
  clearGrid()
}


function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  originalGrid();
}



