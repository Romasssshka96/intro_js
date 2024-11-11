function swap (arr, i1, i2){
    let cell = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = cell;

    return arr;
}

document.write(swap([11,22,33,44],0,1));