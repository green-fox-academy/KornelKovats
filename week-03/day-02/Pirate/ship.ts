import {Pirate} from "./pirate";
import {PirateNames} from './pirateNames';

class Ship {
    crew: Pirate[] = [];
    captain: Pirate;

    fillShip() {
        let pirateNames: PirateNames = new PirateNames();
        let randomPirate: number = Math.floor(Math.random() * 30);
        for (let i = 0; i < randomPirate; i++) {
            this.crew[i] = new Pirate(pirateNames.fillPirateWithName());
        }
        this.captain = new Pirate(pirateNames.fillPirateWithName());
    }

    getInformationaboutShip() {
        if (this.captain.dead) {
            console.log('Captain consumed rum: ' + this.captain.intoxicateLvl + ', Dead: ' + this.captain.dead);
        } else {
            console.log('Captain consumed rum: ' + this.captain.intoxicateLvl + ', Passed out : ' + this.captain.passesOut);
        }
        let numberOfalivePirates: number = 0;
        this.crew.forEach(function (value) {
            if (!value.dead) {
                numberOfalivePirates++;
            }

        });
        console.log('Number of alive pirates in the crew: ' + numberOfalivePirates);
    }

    battle(ship: Ship): boolean {
        let scoreOfThis: number = this.crew.length - this.captain.intoxicateLvl;
        let scoreOfOtherShip: number = ship.crew.length - this.captain.intoxicateLvl;
        let randomOtherShip: number = Math.floor(Math.random()*ship.crew.length);
        let randomThisShip: number = Math.floor(Math.random()* this.crew.length);

        console.log(scoreOfThis + '   ' + scoreOfOtherShip);
        if (scoreOfThis > scoreOfOtherShip) {
            console.log(randomOtherShip);
            ship.crew = ship.crew.filter(function (value,index) {
                if (index>randomOtherShip){
                    return value;
                }
            });
            return true;
        } else {
            console.log(randomThisShip);
            this.crew = this.crew.filter(function (value,index) {
                if (index<randomThisShip){
                    return value;
                }
            });
            return false;
        }
    }

}

let ship: Ship = new Ship();
let ship2: Ship = new Ship();
ship.fillShip();
ship2.fillShip();
ship.getInformationaboutShip();
ship2.getInformationaboutShip();
ship.battle(ship2);


ship.getInformationaboutShip();
ship2.getInformationaboutShip();
