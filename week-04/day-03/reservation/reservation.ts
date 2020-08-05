import { Reservationy } from './interface';

// eslint-disable-next-line import/prefer-default-export
export class Reservation implements Reservationy {
  // eslint-disable-next-line class-methods-use-this
  getCodeBooking():string {
    let result = '';
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  getDowBooking():string {
    let result = '';
    const characters:string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const charactersLength = characters.length;
    result = characters[(Math.floor(Math.random() * charactersLength))];
    return result;
  }

  public printReservation() {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}
