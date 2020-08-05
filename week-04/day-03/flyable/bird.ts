import { Flyable } from './interface';
import { Animal } from '../animals_in_zoo/animals';

// eslint-disable-next-line import/prefer-default-export
export class Bird extends Animal implements Flyable {
  constructor(name, age = 1) {
    super(name, age);
  }

  getName() {
    return this.name;
  }

  // eslint-disable-next-line class-methods-use-this
  breed() {
    return 'laying eggs.';
  }

  land() {
    console.log('The bird cacn land');
  }

  fly() {
    console.log('The bird can fly');
  }

  takeOff() {
    console.log('The bird can take OFF');
  }
}
