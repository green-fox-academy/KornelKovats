import { Person } from './person';

class Student extends Person {
  private previousOrganization: string;

  private skippedDays = 0;

  constructor(name:string, age:number, gender:string, previousOrganization: string) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
  }

  private getGoal():void {
    console.log('My goal is: Be a junior software developer.');
  }

  private introduce():void{
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  private skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}
