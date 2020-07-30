class Anagramma {
  // eslint-disable-next-line class-methods-use-this
  isAnagramma(firstWord:string, secondWord:string):boolean {
    const reversedSecondWordr = secondWord.split('').reverse().join('');
    if (firstWord == reversedSecondWordr) {
      return true;
    }
    return false;
  }
}
export { Anagramma };
