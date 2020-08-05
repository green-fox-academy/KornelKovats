import { Animal } from './animals';

// eslint-disable-next-line import/prefer-default-export
export class Reptile extends Animal {
  /**
     *
     */
  // eslint-disable-next-line no-useless-constructor
  constructor(name, age=1) {
    super(name, age);
  }

  getName():string {
    return this.name;
  }

  breed():string {
    return 'laying eggs.';
  }
}
