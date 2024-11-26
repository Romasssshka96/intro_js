let create = function (arr, newObj){
    let unit = localStorage.getItem(arr)
    let array = JSON.parse(unit)
    array.push(newObj)
    let newArray = JSON.stringify(array)
    localStorage.setItem(newArray)
}