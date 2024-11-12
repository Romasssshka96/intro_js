let arr = [1,17,-2,44,0];


let comparison = array =>{
    let min = array[0];
    for (let i of array){
        if (i<min){
            min=i
        }
    }
    return min;
}

document.write(comparison(arr))