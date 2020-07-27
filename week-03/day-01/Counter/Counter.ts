// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    public integer: number;
    constructor (integer:number=0){
        this.integer = integer;
        console.log(integer);
    }

    add(number: number=1){

            this.integer = this.integer + number;


    }
    get(){
        return this.integer.toString();
    }
    reset(){
        this.integer = 0;
    }
}

let counter = new Counter();
counter.add(80);
counter.add(20);
console.log(counter);
console.log(counter.get());
counter.reset();
console.log(counter);