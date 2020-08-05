// eslint-disable-next-line max-classes-per-file
import { StringedInstrument } from './stringedinstruments';

class ElectricGuitar extends StringedInstrument {
  /**
     *
     */
  constructor(numberOfStrings = 7) {
    super('Electric Guitar', numberOfStrings);
  }

  sound():string {
    return 'Twang';
  }
}
class BassGuitar extends StringedInstrument {
  /**
       *
       */
  constructor(numberOfStrings = 4) {
    super('Bass Guitar', numberOfStrings);
  }

  sound():string {
    return 'Duum-duum-duum';
  }
}
class Violin extends StringedInstrument {
  /**
       *
       */
  constructor(numberOfStrings = 4) {
    super('Violin', numberOfStrings);
  }

  sound():string {
    return 'Screech';
  }
}

const guitar = new ElectricGuitar();
const bassGuitar = new BassGuitar();
const violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log(
  'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.',
);
const guitar2 = new ElectricGuitar(7);
const bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
