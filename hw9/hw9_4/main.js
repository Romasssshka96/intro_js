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
    block.classList.add('item')

    let title = document.createElement('h1')
    title.classList.add('heading')
    title.innerText = i.title

    let value = document.createElement('p')
    value.classList.add('description')
    value.innerText = i.monthDuration

    block.append(title)
    block.append(value)

    document.body.append(block)
}