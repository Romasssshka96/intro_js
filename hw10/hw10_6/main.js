

let funt = document.createElement('div')


let kg = document.getElementsByClassName('kg')[0]
kg.oninput = function (){
    let toNum = +this.value;
    let convert = toNum * 2.2;
    funt.innerText = convert;
    document.body.append(funt)
}




