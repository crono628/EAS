const container = document.querySelector(".container")
const btnClear = document.querySelector('#clear');
btnClear.onclick = () => clearGrid();
const chartSize = document.querySelector("#chartSize").value
chartSize.onclick = () =>

function newChartSize (){
  chartSize.append
}

originalGrid = () => {
  for (let i = 0; i < (chartSize * chartSize); i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    newDiv.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'black';
    })
    container.appendChild(newDiv);
  }
};

originalGrid()

function updateGrid() {
  for (let i = 0; i < (chartSize * chartSize); i++) {
    if ((x < 4) || (x > 16)) {
      x = prompt('choose a number between 4 and 16');
    } else {
      const newDiv = document.createElement('div');
      newDiv.classList.add("grid");
      newDiv.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = 'black';
      });
      container.appendChild(newDiv)
    }
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  originalGrid();
}
