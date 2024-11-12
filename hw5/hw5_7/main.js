let list = (item,quantity) =>{
    document.write(`<ul>`);
    for (let i = 0; i < quantity; i++){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

list('lorem', 7);