fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(console.log);


fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((bookOfCooking) =>{
        let {recipes} = bookOfCooking
        for(let unit of recipes){
            let block = document.createElement("div")

            for (const unitKey in unit) {
                if (Array.isArray(unit[unitKey])){
                    let array = unit[unitKey];
                    let ul = document.createElement("ul")
                    for (const unitKeyElement of array) {
                        let li = document.createElement("li")
                        li.innerText = unitKeyElement;
                        ul.appendChild(li)

                    }
                    block.appendChild(ul)

                }
                else {
                    let stepToStepInstruction = document.createElement("div")
                    stepToStepInstruction.innerText = `${unitKey}: ${unit[unitKey]}`;
                    block.appendChild(stepToStepInstruction)
                }
            }


            let hr = document.createElement("hr")




            document.body.append(block, hr)
        }


    });
















