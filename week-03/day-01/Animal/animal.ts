class Animal {
    hunger: number;
    thirst: number;
    constructor(hunger: number=50, thirst: number=50){
        this.hunger = Math.trunc(hunger);
        this.thirst = Math.trunc(thirst);
    }
    eat(){
        this.hunger = this.hunger - 1;
    }

    drink(){
        this.thirst = this.thirst - 1;
    }
    play(){
        this.hunger = this.hunger + 1;
        this.thirst = this.thirst +1;
    }
}

let animal = new Animal();

console.log(animal);

export {Animal}