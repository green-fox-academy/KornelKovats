// eslint-disable-next-line import/prefer-default-export
export abstract class Vehicle {
  protected name: string;

  protected fuelAmount: number;

  protected speed: boolean;

  constructor(name, fuelAmount, speed) {
    this.name = name;
    this.fuelAmount = fuelAmount;
    this.speed = speed;
  }
}
