const container = document.querySelector(".container")
const gridInfo = document.querySelector("#gridInfo")
const btnClear = document.querySelector('#clear');
btnClear.onclick = () => clearGrid();
const colorChoices = document.querySelector('.btnContainer')
let defaultColor = 'black'
let rainbowChoices = Math.floor(Math.random() * 16777215).toString(16)
let action = false;

const fillDiv = function (e) {
  if (e.type === 'mousedown' || e.type === 'touchstart') {
    action = true
  }
  if (e.touches) {
    e.preventDefault();
    if (action && parentElement === container) {
      style.backgroundColor = customBtn.value
    }
  }
  else if (action) {
    e.target.style.backgroundColor = customBtn.value
  }
}


// let rainbow = document.querySelector('#rainbow')
// rainbow.addEventListener('click', () => {
//   let div = document.querySelectorAll('#grid');
//   div.forEach((option) => {
//     option.addEventListener('mouseover', () => {
//       option.style.backgroundColor = '#' + rainbowChoices;
//     });
//   });
// });

// const customBtn = document.querySelector('#customBtn')
// customBtn.addEventListener('click', () => {
//   let div = document.querySelectorAll('#grid');
//   div.setAttribute('draggable', 'false');
//   div.forEach((option) => {
//     option.addEventListener('mouseover', function (e) {
//       option.style.backgroundColor = customBtn.value;
//     });
//   });
// });


originalGrid()

function originalGrid() {
  let gridSize = document.querySelector('#slider').value;
  container.style.cssText = `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`
  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'grid');
    newDiv.addEventListener('mousedown', fillDiv);
    newDiv.addEventListener('mousemove', fillDiv);
    newDiv.addEventListener('touchstart', fillDiv);
    newDiv.addEventListener('touchmove', fillDiv)
    newDiv.addEventListener('dragstart', e => e.preventDefault());
    newDiv.addEventListener('mouseup', () => action = false);
    newDiv.addEventListener('touchend', () => action = false);
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



