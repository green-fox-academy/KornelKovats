// Given a string, compute recursively a new string where all the adjacent chars
// are now separated by a *

function strings(string: string) {
  if (string.length == 0) {
    return '*';
  }
  return '*' + string.slice(0,1) + strings(string.slice(1, string.length));
}

console.log(strings('asdasd'));