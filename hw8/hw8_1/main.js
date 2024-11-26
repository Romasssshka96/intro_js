let deepCopy = function (whatAreCopying)  {
    if (whatAreCopying){
        let functions = [];
        for (let key in whatAreCopying){
            if (typeof whatAreCopying[key] === 'function'){
                let clon = whatAreCopying[key].bind({});
                functions.push(clon);
            }
        }
        let i = JSON.stringify(whatAreCopying);
        return JSON.parse(i);
    }


};

let obj = {
    name: 'someName',
    lastName: 'someLastName',
    age: 38,
    skils: ['countToTen', 'singASongs'],
    foo(variable){
        if (variable > 0 ){
            this.age = this.age + variable;
        }
    },

}



let newObj = deepCopy(obj) ;





console.log(newObj);


console.log(functions)