// @flow

function* foo(name) {
  console.log(name);
  let x = 0;

  while (true) {
    let result = yield x++;
    console.log(result);
  }
}

let generator = foo('bar');

for (let i = 1; i < 10; i++) {
  console.log(generator.next('hi');
}
