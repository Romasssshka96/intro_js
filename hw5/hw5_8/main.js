let arr = [1,4,true,'h1',7,false,1];


let list = array =>{
    document.write(`<ul>`)
    for (let item of array){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

list(arr);