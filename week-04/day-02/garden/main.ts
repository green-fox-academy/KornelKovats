import { Tree } from './tree';
import { Garden } from './garden';

function main() {
  const garden = new Garden();

  garden.addFlower('yellow');
  garden.addFlower('blue');
  garden.addTree('purple');
  garden.addTree('orange');

  garden.whoNeedsWatering();
  garden.watering(50);
}
main();