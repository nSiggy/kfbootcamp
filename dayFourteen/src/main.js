// @flow

function sleep(ms: number, result): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, ms);
  });
}

//race = only first promise that cleared matters
let newPromiseArray = Promise.race([sleep(500, 'first'), sleep(200, 'second')]);

newPromiseArray.then((result) => {
  console.log(result);
});
