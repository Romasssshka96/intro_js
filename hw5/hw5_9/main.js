let arr = [
    {
    id: 1,
    name: "slfmg",
    age: 12
},
{
    id: 2,
    name: "rgsfd",
    age: 13,
    skils: 'js'
},
{
    id: 3,
    name: "zvsda",
    age: 14
}];

let users = array =>{
    for (let item of array){
            document.write(`<div>${item.id}${item.name}${item.age}</div>`)
    }
}

users(arr)