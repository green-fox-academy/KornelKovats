class Aircraft {
  private maxAmmo: number;

  private amountAmmo: number;

  private baseDamage: number;

  private type: string;

  constructor(type, maxAmmo, baseDamage, amountAmmo) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.amountAmmo = amountAmmo;
  }

  public fight(): number {
    return this.baseDamage * this.maxAmmo;
  }

  public refill(refillAmount: number) {
    const remainingAmmo = this.maxAmmo + this.amountAmmo;
    if (refillAmount > remainingAmmo) {
      this.amountAmmo = this.maxAmmo;
    } else {
      this.amountAmmo += remainingAmmo;
    }
  }

  public getType():string {
    return this.type;
  }

  public getStatus() {
    console.log(`Type ${this.type}, Ammo: ${this.amountAmmo}, 
    Base Damage: ${this.baseDamage}, All Damage: ${this.fight()}`);
  }

  public isPriority() {
    if (this.type === 'F35') {
      return true;
    }
    return false;
  }
}
export { Aircraft };
