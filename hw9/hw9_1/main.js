let block = document.createElement('div')
block.classList.add('wrap')
block.classList.add('collapse')
block.classList.add('alpha')
block.classList.add('beta')

block.style.width = '100px';
block.style.height = '100px';
block.style.background = 'yellow'
block.style.margin = '10px'




let clone = block.cloneNode(true);


document.body.append(block, clone);