
function usersArray (users){
    for (let user of users){
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`)
    }
}

usersArray();