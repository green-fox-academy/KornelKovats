export default function getHighestIndex(plays:string[]):number {
  const values:string[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  let highest:number = values.indexOf(values[0]);
  plays.forEach((play) => {
    values.forEach((value, index) => {
      if (play[0] === value && index > highest) {
        highest = index;
      }
    });
  });
  return highest;
}
