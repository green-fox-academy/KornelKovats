import { Student } from './student';
import { Mentor } from './mentor';

class Cohort {
  private name: string;

  private students: Student[] = [];

  private mentors: Mentor[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public addMentor(mentor:Mentor) {
    this.mentors.push(mentor);
  }

  public info(): void{
    console.log(`The name ${this.name} has ${this.students.length}
       students and ${this.mentors.length} mentors.`);
  }
}
export { Cohort };