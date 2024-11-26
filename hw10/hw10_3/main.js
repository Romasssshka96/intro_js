let form = document.forms.formUser
let button = document.getElementsByTagName('button')[0]




button.onclick = function (ev){
    ev.preventDefault();
        let nameValue = form.name.value;
        let lastNameValue = form.lastName.value;
        let ageValue = form.age.value;
    let user ={
            nameValue,
            lastNameValue,
            ageValue
    };
    let showUser =document.createElement('div');
    showUser.innerText = `${user.nameValue}, ${user.lastNameValue}, ${user.ageValue}` ;
    document.body.appendChild(showUser);

}