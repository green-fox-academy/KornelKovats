import {Car} from "./car";

class Station {
    gasAmount: number = 1000;

    refill(car: Car){
    this.gasAmount = this.gasAmount - car.capacity;


    }

}
let car1: Car = new Car();
let station1: Station = new Station();
station1.refill(car1);

console.log(station1.gasAmount);


export {Station};