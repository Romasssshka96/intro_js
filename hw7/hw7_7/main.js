class Car{

    constructor(model, fabricator, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.fabricator = fabricator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;

        this.drive = () => {console.log(`we are driving at ${this.maxSpeed} km per hour`)};

        this.info = function (){
            for(let key in this){
                console.log(key, this[key])
            }
        };

        this.addToMaxSpeed = function (newValue){
            if(newValue > 0){
                this.maxSpeed = this.maxSpeed + newValue;
            }
        }

        this.changeYear = function (newValue){
            if (newValue > 1900){
                this.year = newValue;
            }
        }
        this.addDriver = function (person){
            this.driver = person
        }
    }
}

let auto = new Car ('crafter', 'vw', 2015, 150, 2 )

auto.drive();
auto.addToMaxSpeed(20);
auto.changeYear(2020);
auto.addDriver();
/*
auto.info();*/
