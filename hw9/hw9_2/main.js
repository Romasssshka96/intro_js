let arr = ['Main','Products','About us','Contacts'];

let createList = document.getElementsByClassName('list')[0];

for (let i of arr) {
    let li = document.createElement('li')
    li.innerText = i
    createList.append(li);
}
