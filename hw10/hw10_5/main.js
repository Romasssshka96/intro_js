
let sessionsList = [];

if (localStorage.getItem('sessionsList')){
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'))
}
sessionsList.push(new Date())
localStorage.setItem('sessionsList', JSON.stringify(sessionsList))

let ul = document.getElementsByClassName('arr')[0]

for (let i of sessionsList){
    let li = document.createElement('li')
    li.innerText = i
    ul.appendChild(li)
}


