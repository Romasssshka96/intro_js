let arr = [1,17,-2,44,0];

let swap = (array, i1, i2) =>{
    let bufer = array[i1];
    array[i1] = array[i2];
    array[i2] = bufer;

    return array;
}

document.write(swap(arr,0,1))