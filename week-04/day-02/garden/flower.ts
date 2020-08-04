import { Plant } from './plant';

class Flower extends Plant {
  constructor(color: string) {
    super('Flower', 0, color, 5, 0.75);
  }
}
export { Flower };
