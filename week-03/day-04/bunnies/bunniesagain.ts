function bunniears(n: number) {
  if (n == 1) {
    return 2;
  } if (n % 2 == 1) {
    return bunniears(n - 1) + 2;
  } if (n % 2 == 0) {
    return bunniears(n - 1) + 3;
  }
}
console.log(bunniears(5));
