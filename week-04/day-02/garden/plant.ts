class Plant {
  protected name:string;

  protected waterAmount: number;

  protected color: string;

  protected waterNeeds: number;

  protected absorbtion: number;

  constructor(name, waterAmount, color, waterNeeds, absorbtion) {
    this.name = name;
    this.waterAmount = waterAmount;
    this.color = color;
    this.waterNeeds = waterNeeds;
    this.absorbtion = absorbtion;
  }

  public whatColor():void{
    console.log(this.color);
  }

  public needsWatering():boolean {
    if (this.waterAmount < this.waterNeeds) {
      return true;
    }
  }

  public increaseWaterAmount(amount: number) {
    this.waterAmount += amount * this.absorbtion;
  }

  public getColor():string {
    return this.color;
  }

  public getName():string {
    return this.name;
  }
}
export { Plant };
