// class is just an syntatic sugar in js
// it creates/define a function to the constructor added
// constructor is the 1st function which gets called during making/creating an object of class

class Thermostat{
    constructor(Fahrenheit){
        this._temperature = Fahrenheit  
    }
    get getTemperature(){
        // in Degree C'
        return (5/9 * (this._temperature - 32)) 
    }
    set setTemperature(Celcius){
        this._temperature = (Celcius * 9/5) + 32
    }
}

// instantiating an object
// object creation with new keyword
thermostatValue = new Thermostat(102)

// get method
console.log(thermostatValue.getTemperature)

// thermostatValue - object name, getTemperature -- get method name, setTemperature -- set method name
let temp = thermostatValue.getTemperature
thermostatValue.setTemperature = 26

temp = thermostatValue.getTemperature
console.log(temp)