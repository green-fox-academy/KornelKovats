// eslint-disable-next-line import/prefer-default-export
export function getIndex(array: string[], value: string):number {
  let result = -1;
  result = array.indexOf(value);
  return result;
}

console.log(getIndex(['hagyma', 'kakaoscsiga'], 'kakaoscsiga'));
