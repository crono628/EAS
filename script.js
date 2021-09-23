const resetBtn = document.querySelector('.reset')
const toggleBtn = document.querySelector('.toggle-grid')
const btnDiv = document.querySelector('.btn-div')

function bigSlide() {
  const container = document.querySelector('.container')
  let cellValue = document.querySelector('.slider').value
  let display = document.querySelector('.size-display')
  display.textContent = `${cellValue} x ${cellValue}`
  container.style.cssText = `grid-template-columns: repeat(${cellValue}, 2fr); grid-template-rows: repeat(${cellValue}, 2fr);`
  for (let i = 0; i < cellValue * cellValue; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('cell')
    newDiv.classList.add('border')
    newDiv.addEventListener('mouseenter', () => {
      newDiv.style.backgroundColor = 'black'
    })
    container.appendChild(newDiv)
  }

}

resetBtn.onclick = () => clearGrid()
toggleBtn.onclick = () => gridBeGone()

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

let slideIt = document.querySelector('.slider')
slideIt.oninput = function () {
  bigSlide()
  clearGrid()
}

// let gridCell = document.querySelectorAll('.cell')
// gridCell.forEach((item) => {
//   item.addEventListener('mouseover', () => {
//     item.style.backgroundColor = 'black'
//   })
// })

bigSlide()
console.log(cellValue);