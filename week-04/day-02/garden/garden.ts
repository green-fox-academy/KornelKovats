import { Tree } from './tree';
import { Flower } from './flower';
import { Plant } from './plant';

class Garden {
  private plants : Plant[] = [];

  public addFlower(color: string): void{
    this.plants.push(new Flower(color));
  }

  public addTree(color: string): void{
    this.plants.push(new Tree(color));
  }

  public watering(n: number):void{
    let howManyPlantNeedsWatering = 0;
    this.plants.forEach((plant) => {
      if (plant.needsWatering()) {
        howManyPlantNeedsWatering+=1;
      }
    });
    const eachPlantWaterAmount = n / howManyPlantNeedsWatering;
    this.plants.forEach((plant) => {
      plant.increaseWaterAmount(eachPlantWaterAmount);
    });
    this.plants.forEach((plant) => {
      if (plant.needsWatering()) {
        console.log(`The ${plant.getColor()} ${plant.getName} needs watering`);
      } else {
        console.log(`The ${plant.getColor()} ${plant.getName} doesnt need watering`);
      }
    });
  }

  public whoNeedsWatering() {
    this.plants.forEach((plant) => {
      if (plant.needsWatering()) {
        console.log(`The ${plant.getColor()} ${plant.getName} needs watering`);
      } else {
        console.log(`The ${plant.getColor()} ${plant.getName} doesnt need watering`);
      }
    });
  }
}
export { Garden };
