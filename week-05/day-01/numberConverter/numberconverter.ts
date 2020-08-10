import converter from 'number-to-words';

export default function numberConverter(number: number):string {
  const numberinString = converter.toWords(number);
  return numberinString;
}
