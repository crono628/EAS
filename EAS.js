const div = document.createElement('div')
const container = document.getElementsByClassName("container")
const button = document.querySelector('button')
button.addEventListener('click', updateGrid())

function updateGrid(size) {
    let x = document.getElementById("input")
    for (let i = 1; i <= x * x; i++)
    if (size.input[i])
    
}
console.log(button)
console.log(updateGrid)

// function mainGrid(x) {
//     let gridSize = num * num;
//     for (let num = 4; num <= gridSize; num++){
//         if (gridSize[num])
//         return x
//     }
// }

