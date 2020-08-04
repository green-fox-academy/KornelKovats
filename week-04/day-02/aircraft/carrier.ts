import { Aircraft } from './aircraft';
import { F16 } from './f16';
import { F35 } from './f35';

class Carrier {
  private aircrafts: Aircraft[] = [];

  private storeAmmo = 10000;

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
    if (this.initialAmmo === 0) {
      throw 'There is no ammo in the carrier';
    } else {
      let isthereAmmoForEveryCrafthelper = 0;
      this.aircrafts.forEach((aircraft) => {
        isthereAmmoForEveryCrafthelper += aircraft.getMaxAmmo() - aircraft.getAmountAmmo();
      });

      if (this.initialAmmo > isthereAmmoForEveryCrafthelper) {
        this.aircrafts.forEach((aircraft) => {
          this.initialAmmo -= aircraft.refill(this.initialAmmo);
        });
      } else {
        this.aircrafts.forEach((aircraft) => {
          if (aircraft.isPriority) {
            this.initialAmmo -= aircraft.refill(this.initialAmmo);
          }
        });
        this.aircrafts.forEach((aircraft) => {
          this.initialAmmo -= aircraft.refill(this.initialAmmo);
        });
      }
    }
  }

  public fight(carrier: Carrier) {
    let damageToAnotherCarrier = 0;
    this.aircrafts.forEach((aircraft) => {
      damageToAnotherCarrier += aircraft.fight();
    });
    if (carrier.healthPoint < damageToAnotherCarrier) {
      carrier.healthPoint = 0;
    } else {
      carrier.healthPoint -= damageToAnotherCarrier;
    }
  }

  public getStatus() {
    let allDamageofCarrierhelper = 0;
    this.aircrafts.forEach((aircraft) => {
      allDamageofCarrierhelper += aircraft.fight();
    });

    console.log(`HP: ${this.healthPoint} Aircraft count: ${this.aircrafts.length} Ammo storage: ${this.initialAmmo} All Damage: ${allDamageofCarrierhelper}`);
    this.aircrafts.forEach((aircraft) => {
      console.log(`Type ${aircraft.getType()} Ammo: ${aircraft.getAmountAmmo()} BaseDamage: ${aircraft.getBaseDamage()} All Damage: ${aircraft.fight()}`);
    });
  }
}
export { Carrier };
