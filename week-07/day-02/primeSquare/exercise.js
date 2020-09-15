const section = document.querySelector('section');
/* eslint-disable */
for (let i = 1; i <= 100; i++) {
  const div = document.createElement('div');
  div.innerText = i;
  section.appendChild(div);
}
const setClass = (element) => {
  if (prime(element.innerText)) {
    element.setAttribute('class', 'prime');
  } else {
    element.setAttribute('class', 'not-prime');
  }
};

let count = 0;
const setAttributes = setInterval(() => {
  setClass(section.children[count]);
  count += 1;
  if (count === 100) {
    clearInterval(setAttributes);
  }
}, 500);

/*for (let i = 0; i < 100; i++) {
  const test = setInterval(() => {
    setClass(section.children[i]);
  }, 4000);
}*/



function prime(n, flag) {
  (typeof flag === 'undefined' || flag === false) ? flag = false : flag = true;

  function isPrime(num) {
    if (num === 0 || num === 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  if (flag) {
    const arr = [2];
    for (let i = 3; i <= n; i += 2) {
      if (isPrime(i)) {
        arr.push(i);
      }
    }
    return arr;
  }
  return isPrime(n);
}
