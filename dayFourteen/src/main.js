// @flow

function sleep(ms: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

sleep(10000000).then(() => console.log('sleep'));
