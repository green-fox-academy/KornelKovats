import getHighestIndex from './gethighest';

export default function pokerPlay(playA:string[], playB:string[]):string {
  const suits:string[] = ['C', 'D', 'H', 'S'];
  const valuesOfFirstChar:string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'T', 'J', 'Q', 'K', 'A'];
    //straight flush







    // highest card
  let playAhelper = playA.map((value) => value);
  let playBhelper = playB.map((value) => value);
  let getHighestOfA = 0;
  let getHighestOfB = 0;
  let notToBeInfinityLoop = 5;
  while (getHighestOfA === getHighestOfB || notToBeInfinityLoop === 0) {
    getHighestOfA = getHighestIndex(playAhelper);
    getHighestOfB = getHighestIndex(playBhelper);
    if (getHighestOfA === getHighestOfB) {
      // eslint-disable-next-line no-loop-func
      playAhelper = playAhelper.filter((value) => {
        if (value[0] !== valuesOfFirstChar[getHighestOfA]) {
          return value;
        }
      });
      // eslint-disable-next-line no-loop-func
      playBhelper = playBhelper.filter((value) => {
        if (value[0] !== valuesOfFirstChar[getHighestOfB]) {
          return value;
        }
      });
    }
    notToBeInfinityLoop -= 1;
  }
  if (getHighestOfA > getHighestOfB) {
    return 'White wins!';
  // eslint-disable-next-line no-else-return
  } else if (getHighestOfA < getHighestOfB) {
    return 'Black wins!';
  } else {
    return 'Tie.';
  }
}

