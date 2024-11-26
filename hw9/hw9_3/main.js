let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];



for (let i of coursesAndDurationArray){
    let block = document.createElement('div')
    block.innerText = `${i.title} ${i.monthDuration}`
    document.body.append(block)
}

