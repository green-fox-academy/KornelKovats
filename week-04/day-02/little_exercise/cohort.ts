import { Person } from './person';
import { Student } from './student';
import { Mentor } from './mentor';

class Cohort extends Person {
  private name: string;

  private students: Student[];

  private mentors: Mentor[];

  addStudent(student: Student) {
    this.students.push(student);
  }

  addMentor(mentor:Mentor) {
    this.mentors.push(mentor);
  }

  info(){
      console.log(`The name ${this.name} has students.size students and mentors.size mentors.`)
  }
}
