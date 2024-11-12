let arr = [1,17,-2,44,0];

let sum = array =>{
    let start = 0;
    for (let item of array){
        start = start + item;
    }
    return start;
}

document.write(sum(arr))