class Client  {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice', 'meet']),
    new Client(2, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice', 'meet', 'milk']),
    new Client(3, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice']),
    new Client(4, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice', 'meet', 'milk','potato']),
    new Client(5, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice', 'meet', 'milk','potato', 'cucumber']),
    new Client(6, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice', 'meet']),
    new Client(7, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice', 'meet', 'milk']),
    new Client(8, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice', 'meet', 'milk']),
    new Client(9, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice', 'meet', 'milk']),
    new Client(10, 'qwerty', 'asdfgh', 'qwadzc@dfcx', '+1234', ['juice', 'meet', 'milk'])
]

console.log(clients)