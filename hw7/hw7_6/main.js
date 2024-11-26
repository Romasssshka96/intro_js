function Car (model, fabricator, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.fabricator = fabricator;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function (){
        console.log(`we are driving at ${this.maxSpeed} km per hour`)
    };
    this.info = function (){
        for(let key in this){
            console.log(key , this[key])
        }

    };
    this.plusToMaxSpeed = function (newValue){
        if (newValue > 0){
            this.maxSpeed = this.maxSpeed + newValue;
        }
    };
    this.changeYear = function (year){
        if(year > 1900){
            this.year = year;
        }
    }
    this.addDriver = function (driver){
        this.driver = driver ;
    }
}







let auto = new Car ('crafter', 'vw', 2015, 150, 2);
/*auto.info();*/
auto.drive();
auto.plusToMaxSpeed(70);
auto.changeYear(2000);
auto.addDriver();
console.log(auto);

