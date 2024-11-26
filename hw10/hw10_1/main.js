let block = document.createElement('div');
block.setAttribute('id', 'text');
block.style.width = '100px';
block.style.height = '100px';
block.style.background = 'yellow';
document.body.appendChild(block);

let button =document.createElement('button')
button.innerText = 'click'
document.body.appendChild(button)

button.onclick = function (){
    block.style.display = 'none'
}

