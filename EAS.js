const container = document.querySelector(".container")
const btnClear = document.querySelector('#clear');
btnClear.onclick = () => clearGrid();


function originalGrid() {
  let gridSize = document.getElementById('slider').value;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    newDiv.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'black';

    });
    container.appendChild(newDiv);
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  originalGrid();
}



