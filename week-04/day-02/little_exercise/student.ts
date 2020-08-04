import { Person } from './person';

class Student extends Person {
  private previousOrganization: string;

  private skippedDays;

  constructor(name:string = 'Jane Doe', age:number = 30, gender:string = 'female', previousOrganization = 'The School of Life', skippedDays = 0) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  public getGoal():void {
    console.log('My goal is: Be a junior software developer.');
  }

  public introduce():void{
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  public skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}
export { Student };
