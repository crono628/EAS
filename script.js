const resetBtn = document.querySelector('.reset')
const toggleBtn = document.querySelector('.toggle-grid')
const blackBtn = document.querySelector('.black-btn')
const rainbowBtn = document.querySelector('.rainbow-btn')
const btnDiv = document.querySelector('.btn-div')

resetBtn.onclick = () => clearGrid()
toggleBtn.onclick = () => gridBeGone()
blackBtn.onclick = () => blackInk()
rainbowBtn.onclick = () => rainbowInk()

let slideIt = document.querySelector('.slider')
slideIt.oninput = function () {
  bigSlide()
  clearGrid()
}

function bigSlide() {
  const container = document.querySelector('.container')
  let cellValue = document.querySelector('.slider').value
  let display = document.querySelector('.size-display')
  display.textContent = `${cellValue} x ${cellValue}`
  container.style.cssText = `grid-template-columns: repeat(${cellValue}, 2fr); grid-template-rows: repeat(${cellValue}, 2fr);`
  for (let i = 0; i < cellValue * cellValue; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('cell', 'border')
    newDiv.addEventListener('mouseenter', () => {
      newDiv.style.backgroundColor = 'black'
    })
    container.appendChild(newDiv)
  }
}

function clearGrid() {
  const container = document.querySelector('.container')
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  bigSlide();
}

function gridBeGone() {
  let allCells = document.querySelectorAll('.cell')
  cellArray = [...allCells]
  cellArray.forEach(cell => {
    cell.classList.toggle('border')
  });
}

function blackInk() {
  let gridCell = document.querySelectorAll('.cell')
  gridCell.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      item.style.backgroundColor = 'black'
    })
  })
}

function randomRainbow() {
  let color = Math.floor(Math.random() * 16777215).toString(16)
  return color
}

function rainbowInk() {
  let gridCell = document.querySelectorAll('.cell')
  gridCell.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      item.style.backgroundColor = '#' + randomRainbow()
    })
  })
}

bigSlide()