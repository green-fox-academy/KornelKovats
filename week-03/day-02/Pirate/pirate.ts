class Pirate {
    name: string;
    intoxicateLvl: number;
    dead: boolean;
    passesOut: boolean;
    parrot: boolean = false;

    constructor(name: string="Jack Sparrow",intoxicateLvl: number = 0, dead: boolean = false, passesOut: boolean = false) {
        this.name = name;
        this.intoxicateLvl = intoxicateLvl;
        this.dead = dead;
        this.passesOut = passesOut;
    }

    drinkSomeRum() {
        this.intoxicateLvl += 1;
    }

    howsItGoingMate() {
        if (this.dead == false) {
            if (this.intoxicateLvl <= 4) {
                console.log("Pour me anudder!");
            } else {
                console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?")
                this.passesOut = true;
            }
        } else {
            console.log("He is dead")
        }
    }

    die() {
        this.dead = true;
    }

    brawl(pirate: Pirate) {
        let chanceNumber: number = Math.random() * 100;
        if (!this.dead&&pirate.dead==false) {
            if (chanceNumber < 33) {
                this.passesOut = true;
                pirate.passesOut = true;
            } else if (chanceNumber > 33 && chanceNumber < 66) {
                this.dead = true
            } else if (chanceNumber > 66) {
                pirate.dead = true;
            }
        }else{
            console.log("You cant fight with a dead Pirate idiot!");
        }
    }
}








export {Pirate}
