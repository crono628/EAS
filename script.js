const buttons = document.querySelectorAll('[data-btn]')

let slideIt = document.querySelector('.slider')
slideIt.oninput = function () {
  displayGrid()
  clearGrid()
}

function displayGrid() {
  const container = document.querySelector('.container')
  let cellValue = document.querySelector('.slider').value
  let display = document.querySelector('.size-display')
  display.textContent = `${cellValue} x ${cellValue}`
  container.style.cssText = `grid-template-columns: repeat(${cellValue}, 2fr); grid-template-rows: repeat(${cellValue}, 2fr);`
  for (let i = 0; i < cellValue * cellValue; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('cell', 'border')
    newDiv.addEventListener('mouseenter', () => {
      newDiv.style.backgroundColor = 'rgb(0, 0, 0)'
    })
    container.appendChild(newDiv)
  }
}

function clearGrid() {
  const container = document.querySelector('.container')
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  displayGrid();
}

function randomRainbow() {
  let color = Math.floor(Math.random() * 16777215).toString(16)
  return color
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let dataBtn = button.dataset.btn
    let allCells = document.querySelectorAll('.cell')
    switch (dataBtn) {
      case 'black':
        allCells.forEach(cell => {
          cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'rgb(0, 0, 0)'
          })
        })
        break;
      case 'rainbow':
        allCells.forEach(cell => {
          cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = '#' + randomRainbow()
          })
        })
        break;
      case 'toggle':
        allCells.forEach(cell => {
          cell.classList.toggle('border')
        });
        break;
      case 'reset':
        clearGrid()
        break;
      case 'eraser':
        allCells.forEach(cell => {
          cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'rgb(255, 255, 255)'
          })
        })
        break;
      default:
        console.log('default')
    }
  })
})

displayGrid()