function comparison(array){
    let min = array[0];
    for (let item of array){
        if (item < min){
            min = item
        }
    }
    return min;
}


document.write(comparison ([7,-14,2,61,-30]));
