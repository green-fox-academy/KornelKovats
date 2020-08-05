import { Instrument } from './instruments';


// eslint-disable-next-line import/prefer-default-export
export abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound():string;

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}
