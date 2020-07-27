
// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well

import { Thing } from './thing';
import { Fleet } from './fleet';

class FleetOfThings{
    //fleet = [];
    main():Thing[]{
        let fleet = new Fleet();

        let getMilk = new Thing('Get milk');
        let removeObstacles = new Thing('Remove Obstacles');
        let standUp = new Thing('Stand up');
        let eatLunch = new Thing('Eat Lunch');
        standUp.complete();
        eatLunch.complete();
        fleet.add(getMilk);
        fleet.add(removeObstacles);
        fleet.add(standUp);
        fleet.add(eatLunch);

        return fleet.getThings();

    }
    print(things: Thing[]){
        things.forEach(function (value, index, array) {
            if (value.getCompleted() == undefined){
                console.log('[ ]' + value.getName());
            }
            if (value.getCompleted()== true) {
                console.log('[X]' + value.getName());
            }
        });
    }
}
let fleet = new FleetOfThings();
fleet.print(fleet.main());