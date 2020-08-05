import { Aircraft } from './aircraft';
import { F16 } from './f16';
import { F35 } from './f35';
import { Carrier } from './carrier';

function main() {
  const carrier1: Carrier = new Carrier(1000,5000);

  carrier1.add();
  carrier1.add();
  carrier1.add();
  carrier1.add();
  carrier1.add();
  carrier1.add();

  carrier1.fill();

  carrier1.getStatus();
}

main();
