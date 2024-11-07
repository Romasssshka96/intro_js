let meaning = prompt('Enter meaning')
    if (meaning === 0){
        console.log('default')
    }
    else if (meaning === null){
        console.log('default')
    }
    else if (meaning === undefined){
        console.log('default')
    }
    else if (meaning === ''){
        console.log('default')
    }
    else {
        console.log('ok')
    }
