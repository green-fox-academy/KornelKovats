class Count {
  countingLetters(word: string): any {
    const arrayword = word.split('');
    // copied fro stackoverflow
    const unique = (value, index, self) => self.indexOf(value) === index;
    const uniqueValues = arrayword.filter(unique);
    // fill the object with the uniq array keys with 0 value
    const object: object = {};
    for (let i = 0; i < uniqueValues.length; i++) {
      object[uniqueValues[i]] = 0;
    }
    // looping though the object
    for (const objectKey in object) {
      // looping though the original array
      for (let i = 0; i < word.length; i++) {
        // compare the object keys with the original array's value
        if (objectKey == word[i]) {
          // increment the objects values if those compared
          object[objectKey]++;
        }
      }
    }

    return object;
  }
}

export { Count };
