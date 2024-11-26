let number = document.getElementsByClassName('number')[0]

let cellInMemory = +localStorage.getItem('cell')
cellInMemory +=1
localStorage.setItem('cell', cellInMemory)

number.innerText = cellInMemory