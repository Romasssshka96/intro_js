let check = document.getElementById('checkAge')
let button = document.createElement('button')
button.innerText = 'check'
document.body.appendChild(button)

button.onclick = function (value){
    if (check.value > 18 && check.value < 70){
        console.log('nice :)')
    }
    else {
        console.log('access denied')
    }

}
