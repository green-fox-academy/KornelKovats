import { Reservation } from './reservation';
import { Reservationy } from './interface';

function main() {
  const reservations: Reservation[] = [];
  // Here I push reservations to a Reservation[] array

  for (let index = 0; index < 10; index++) {
    reservations.push(new Reservation());
  }
  // Here I print the resrvations which is in a list of Reservation[]

  reservations.forEach((reservation) => {
    reservation.printReservation();
  });
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
  const interfaces: Reservationy[] = [];
// Here I push reservations to the interface Reservationy[] array
  for (let index = 0; index < 10; index++) {
    interfaces.push(new Reservation());
  }
// Here I print the reservations which is in a list of interfaces 
// here you need to make if statement with instanceof to know what to print
// very very important!!

  interfaces.forEach((value) => {
    // eslint-disable-next-line no-lone-blocks
    if (value instanceof Reservation) {
      value.printReservation();
    }
  });
}

main();
