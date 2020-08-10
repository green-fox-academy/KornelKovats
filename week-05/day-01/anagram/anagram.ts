export default function isAnagram(stringA: string, stringB: string):boolean {
  const stringAletters: string = stringA.split('').sort().join(',').toLowerCase();
  const stringBletters: string = stringB.split('').sort().join(',').toLowerCase();
    console.log(stringAletters);
    console.log(stringBletters);

  return stringAletters === stringBletters;
}
