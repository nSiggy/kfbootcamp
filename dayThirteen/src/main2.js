// @flow

import fs from 'fs';

/*
fs.readdir('./', (err, items) => {
  console.log(items);
});

let isMomHappy = true;

let willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    let phone = {type: 'Samsung', color: 'Black'};
    resolve(phone);
  } else {
    let reason = new Error('Mom is not happy');
    reject(reason);
  }
});

let askMom = function() {
  willIGetNewPhone
    .then((fulfilled) => {
      console.log(fulfilled);
    })
    .catch((error) => {
      console.log(error);
    });
};

askMom();*/

/*
let promisified = new Promise((resolve, reject) => {
  return fs.readdir('./', (err, files) => {
    err ? reject(err) : resolve(files);
  });
});

promisified
  .then((fulfilled) => {
    console.log('success: ' + fulfilled);
  })
  .catch((error) => {
    console.log(error);
  });*/

function listDir(path) {
  fs.readdir(path, (err, files) => {
    if (err) {
      return err;
    } else {
      return files;
    }
  });
}

function convertToPromise(arg, callbackFunction) {
  return new Promise((resolve, reject) => {
    let result = callbackFunction(arg);
    resolve(result);
  });
}

convertToPromise('./', listDir).then((fulfilled) => {
  console.log(fulfilled);
});
