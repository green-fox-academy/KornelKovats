// Given a string, compute recursively (no loops)
// a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function strings(string: string) {
  if (string.length == 1) {
    if (string == 'x') {
      return 'y';
    }
    return string;
  }
  if (string.slice(0, 1) == 'x') {
    return `y${strings(string.slice(1, string.length))}`;
  }
  return string.slice(0, 1) + strings(string.slice(1, string.length));
}

const word = 'xxxyyyy';

console.log(strings(word));
