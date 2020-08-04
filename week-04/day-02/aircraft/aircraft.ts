class Aircraft {
  protected maxAmmo: number;

  protected amountAmmo: number;

  private baseDamage: number;

  private type: string;

  constructor(type, maxAmmo, baseDamage, amountAmmo) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.amountAmmo = amountAmmo;
  }

  public getMaxAmmo() {
    return this.maxAmmo;
  }

  public getAmountAmmo() {
    return this.amountAmmo;
  }

  public fight(): number {
    return this.baseDamage * this.amountAmmo;
  }

  public refill(refillAmount: number):number {
    const remainingAmmo = this.maxAmmo - this.amountAmmo;
    if (refillAmount > remainingAmmo) {
      this.amountAmmo = this.maxAmmo;
      return remainingAmmo;
    }
    this.amountAmmo += refillAmount;
    return refillAmount;
  }

  public getType():string {
    return this.type;
  }
  public getBaseDamage():number {
    return this.baseDamage;
  }

  public getStatus() {
    console.log(`Type ${this.type}, Ammo: ${this.amountAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.fight()}`);
  }

  public isPriority() {
    if (this.type === 'F35') {
      return true;
    }
    return false;
  }
}
export { Aircraft };
