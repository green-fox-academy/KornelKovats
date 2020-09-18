/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});
function onReject(error) {
  console.log(error.message);
}
promise.then(null, onReject); */


let promise = new Promise((resolve, reject) => {
    resolve( new Error('I DID NOT FIRE'));

    reject('I DID NOT FIRE');
});


promise
.catch(error=>{console.log(error.message)});