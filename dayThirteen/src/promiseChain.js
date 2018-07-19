// @flow

let promise = Promise.resolve('Yosua');

promise
  .then((result) => {
    console.log('Hello from promise 1: ' + result);
    return Promise.resolve(123);
  })
  .then((result) => {
    console.log('Hello from promise 2: ' + result);
  })
  .catch((error) => {
    console.log(error);
  });
