// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function strings(string: string) {
  if (string.length == 1) {
    if (string == 'x') {
      return '';
    }
    return string;
  }
  if (string.slice(0, 1) == 'x') {
    return strings(string.slice(1, string.length));
  }
  return string.slice(0, 1) + strings(string.slice(1, string.length));
}
console.log(strings('xxxxlllllll'));