class Anagramma {
    isAnagramma(firstWord:string,secondWord:string):boolean{
        let reversedSecondWordr = secondWord.split('').reverse().join('');
        if (firstWord==reversedSecondWordr) {
            return true;
        }else {
            return false;
        }

    }
}
export {Anagramma}
