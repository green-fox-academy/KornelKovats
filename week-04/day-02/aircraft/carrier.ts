import { Aircraft } from './aircraft';
import { F16 } from './f16';
import { F35 } from './f35';

class Carrier {
  private aircrafts: Aircraft[] = [];

  private storeAmmo = 1000;

  private initialAmmo: number;

  private healthPoint: number;

  constructor(initialAmmo: number, healthPoint: number) {
    this.initialAmmo = initialAmmo;
    this.healthPoint = healthPoint;
  }

  public add() {
    if (Math.floor(Math.random() * 2) + 1 === 1) {
      this.aircrafts.push(new F16());
    } else {
      this.aircrafts.push(new F35());
    }
  }

  public fill() {
    const isThereEnoughAmmo = true;
    this.aircrafts.forEach((aircraft) => {
      aircraft.refill;
    });
  }
}
