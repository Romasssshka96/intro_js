function list (text, quantity){
    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)

}

list('lorem', 6);