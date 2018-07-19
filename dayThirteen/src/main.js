// @flow

function denodeify<T>(
  callbackStyleFunc: (input: T, callback: Function) => void,
) {
  return (input: T) => {
    return new Promise((resolve, reject) => {
      callbackStyleFunc(input, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}

function getStudents(
  schoolID: string,
  callback: (error: ?Error, result: Array<string>) => void,
) {
  setTimeout(() => {
    callback(null, ['Evan', 'Yosua']);
  }, 500);
}

let getStudentNew = denodeify(getStudents);

let result = getStudentNew('100');

result.then((fulfilled) => {
  console.log(fulfilled);
});
