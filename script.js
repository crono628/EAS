const container = document.querySelector('.container')
const slideIt = document.querySelector('.slider')

(function bigSlide() {
  let cellValue = slideIt.value
  container.style.cssText = `grid-template-columns: repeat(${cellValue}, 2fr); grid-template-rows: repeat(${cellValue}, 2fr);`
  for (let i = 0; i < cellValue * cellValue; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('cell')
    newDiv.style.border = 'solid black 2px'
    container.appendChild(newDiv)
  }
})()

console.log(cellValue);