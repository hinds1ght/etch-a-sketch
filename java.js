function populate(){
    const size = input.value
    let container = document.getElementById('container')
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(i = 0; i < size * size; i++){
        const box = document.createElement('div')
        box.addEventListener('mouseover', changeColor)
        box.style.backgroundColor = 'floralwhite'
        container.append(box)
    }
}

let body = document.querySelector('body')
let input = document.createElement('input')
input.id = 'input'
let color = 'black'
let button = document.createElement('button')
button.textContent = 'APPLY'
body.append(input, button)

button.addEventListener('click', () => {
    if (input.value >= 2 && input.value <= 100){
        populate()
    }else{
        alert('Only accept numbers between 2 and 100')
    }
})
function changeColor(){
    this.style.backgroundColor = color
}
function choice(a){
    if (a == 'Blue' || a == 'Red'){
        color = a
    }else{
        color = 'floralwhite'
    }
}
let bgColor
const arr = ['Eraser', 'Blue', 'Red'] 
for (j = 0; j < 3; j++){
    const buttons = document.createElement('button')
    buttons.id = 'btns' + [j]
    buttons.className = 'buttons'
    buttons.textContent = arr[j]
    body.insertAdjacentElement("afterend", buttons)
    buttons.addEventListener('click', () =>{
        choice(buttons.textContent)
    })
}
