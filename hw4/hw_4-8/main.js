function list (arrayOfElements){
    document.write(`<ul>`);
        for (let item of arrayOfElements){
            document.write(`<li>${item}</li>`);
    }
        document.write(`</ul>`);
}

list([1,2,3,true,"hello",-10,false,7]);


