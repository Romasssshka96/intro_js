let array = [12,13,14,15,16,17];





let arr = (array) => {
    for (let item of array){
        document.write(`<div>${item}</div>`)
    }
    return arr;
}



arr(array);