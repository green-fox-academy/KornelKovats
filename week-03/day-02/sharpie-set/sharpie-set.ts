import { Sharpie } from '../../day-01/Sharpie/sharpie';

class SharpieSet {
  sharpies: Sharpie[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.sharpies[i] = new Sharpie('blue', i);
    }
  }

  countUsable(sharpie: Sharpie): string {
    if (sharpie.inkAmount > 0) {
      return 'Usable';
    }
    return 'Not Usable';
  }

  removeTrash() {
    this.sharpies = this.sharpies.filter((value, index, array) => {
      if (value.inkAmount !== 0) {
        return value;
      }
    });
  }
}

const sharpies = new SharpieSet();
for (let i = 0; i < 100; i++) {
  sharpies.sharpies[0].use();
}

sharpies.removeTrash();
console.log(sharpies.sharpies);
