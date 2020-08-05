import { Flyable } from './interface';
import { Vehicle } from './vehicle';

// eslint-disable-next-line import/prefer-default-export
export class Helicopter extends Vehicle implements Flyable {
  constructor(name, fuelAmount = 10, speed = 30) {
    super('Helicopter', fuelAmount, speed);
  }

  // eslint-disable-next-line class-methods-use-this
  fly() {
    console.log('Helicopter can fly');
  }

  // eslint-disable-next-line class-methods-use-this
  land() {
    console.log('Helicopter can land');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  takeOff() {
    console.log('Helicopter can take off');
  }
}
