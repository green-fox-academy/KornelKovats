import { Plant } from './plant';

class Tree extends Plant {
  constructor(color: string) {
    super('Tree', 0, color, 10, 0.4);
  }
}

export { Tree };
