import {Animal} from '../../day-01/Animal/animal'

class Farm {
    farm: Animal[]= [];
    slots: number;
    constructor(slots: number){
        this.slots = slots;
    }
    breed(){
        this.farm[0] = new Animal(30,34);
        for (let i = 1; i < this.slots; i++) {
            this.farm[i] = new Animal();
        }
        this.farm[this.slots+1] = new Animal(22,34);
        this.farm[this.slots+2] = new Animal(44,34);

        this.farm[this.slots+3] = new Animal(12,34);

        this.farm[this.slots+4] = new Animal(7,34);

        this.farm[this.slots+5] = new Animal(22,34);


    }
    slaughter(){
        let least = this.farm[0];
        let whereIsleastIndex= 0;
        this.farm.forEach(function (value, index, array) {
            if (array[index].hunger<least.hunger) {
                least = array[index];
                whereIsleastIndex = index;
            }
        });

        //console.log(whereIsleastIndex);
        this.farm.splice(whereIsleastIndex,1)
    }
}

let farm = new Farm(2);


farm.breed();

farm.slaughter();
console.log(farm.farm);

