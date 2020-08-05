import { Printable } from './interface_printable';

// eslint-disable-next-line import/prefer-default-export
export class Domino implements Printable {
  // eslint-disable-next-line camelcase
  protected side_A: number;

  protected side_B: number;

  constructor(side_A=10, side_B=10) {
    this.side_A = side_A;
    this.side_B = side_B;
  }

  printAllFields() {
    console.log(`Domino A side: ${this.side_A}, B side: ${this.side_B}`);
  }
}
