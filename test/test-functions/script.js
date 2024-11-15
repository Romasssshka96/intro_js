let user = {
    name: 'stepan',
    age: 17,
    hello: function (sms){
        return `<h1>${sms} i have ${this.age} years old</h1><h1>and mi mane is ${this.name}</h1>`;
}
}

document.write(user.hello("hi"));