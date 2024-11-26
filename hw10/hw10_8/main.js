let table = document.getElementById('table')

let form = document.forms.form;


form.onsubmit = function (ev){
    ev.preventDefault()
    let unit = +form.createTd.value
    let row = +form.createTr.value
    let somThin = form.text.value
    for (let i=0; i<row; i++){
        let tr = document.createElement('tr')
        for (let i = 0; i<unit; i++){
            let td = document.createElement('td')
            td.innerText = somThin
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

}





