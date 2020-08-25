// 1.
const king = document.getElementById('b325');
console.log(king);
const kingQueryselector = document.querySelector('#b325');
console.log(kingQueryselector);
// 2.
const businessLamp = document.getElementsByClassName('big');
for (element in businessLamp) {
  console.log(businessLamp[element]);
}
const businessLampQueryselector = document.querySelectorAll('.big');
for (element in businessLampQueryselector) {
  console.log(businessLampQueryselector[element]);
}
// 3.
const asteroids = document.getElementsByClassName('asteroid');
const conceitedKing = [];
for (const element in asteroids) {
  if (asteroids[element].innerText === 'The King' || asteroids[element].innerText === 'The Conceited Man') {
    conceitedKing.push(asteroids[element]);
  }
}
for (const key in conceitedKing) {
  console.log(conceitedKing[key]);
}
// 4.
console.log('');
const noBusiness = document.querySelectorAll("div.asteroid");
for (const key in noBusiness) {
    console.log(noBusiness[key])
}
