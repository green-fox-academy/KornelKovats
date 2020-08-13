export default abstract class Animal {
  protected ownerName: string;

  private isHealthy: boolean;

  protected healCost: number;

  constructor(healCost: number, ownerName?: string) {
    this.ownerName = ownerName;
    this.isHealthy = false;
    this.healCost = healCost;
  }

  private heal() {
    this.isHealthy = true;
  }

  private isAdoptable():boolean {
    if (this.isHealthy) {
      return true;
    }
    return false;
  }

  private toString():string {
    if (this.isHealthy) {
      return `${this.ownerName} is healthy, and adoptable`;
    }
    return `${this.ownerName} is not healthy (${this.healCost}€), and not adoptable`;
  }
}
