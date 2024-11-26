function Princess (name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

const princesses =[
    new Princess('Sabina', 20, 38),
    new Princess('Ol`a', 18, 40),
    new Princess('Sveta', 21, 39),
    new Princess('Nika', 19, 37),
    new Princess('Dasha', 19, 39),
    new Princess('Liza', 20, 42),
    new Princess('Liza', 18, 40),
    new Princess('Ol`a', 23, 39),
    new Princess('Nika', 18, 37),
    new Princess('Dasha', 21, 36),
]

const Princ ={
    name: 'Roma',
    age: 28,
    sizeOfTheShoeFound: 38,
}

console.log(princesses.find(value => value.footSize === Princ.sizeOfTheShoeFound));