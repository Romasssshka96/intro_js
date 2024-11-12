
let array = ["hello", 17, false, true, 24,"hey"];

function show (array){
    for  (let item of array) {
        document.write(`<div>${item}</div>`);
    }
    return array;
}

show(array)