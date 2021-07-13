const div = document.createElement('div')
const container = document.getElementsByClassName("container")
const button = document.querySelector('button')
button.addEventListener('click', updateGrid())

// function createGrid(size) {
//   for (let index = 0; index < size * size; index++) {
//     let div = document.createElement('div')
//     grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
//     grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
//     grid.appendChild(div).className = 'div'
//   }

//   // changes color of grid when hovered
//   let squares = document.querySelectorAll('.div')
//   squares.forEach(square => {
//     square.addEventListener('mouseover', () => {
//       let randomColor = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)})`
//       square.style.backgroundColor = randomColor
//     })
//   })
// }

createGrid(10)
console.log(createGrid)
// function mainGrid(x) {
//     let gridSize = num * num;
//     for (let num = 4; num <= gridSize; num++){
//         if (gridSize[num])
//         return x
//     }
// }

console.log(button)