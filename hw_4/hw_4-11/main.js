function arrSum (numbers){
    let sum = 0;
    for (item of numbers){
        sum = sum + item;
    }
    return sum;
}

document.write(arrSum([1,3,64,3,2,1]));