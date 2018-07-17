// @flow

function createCounter(initialValue: number) {
  let counter = initialValue || 0;

  let increment = (add: number | null) => {
    let addValue = add || 1;

    counter += addValue;
    console.log('adding ' + addValue + ' = ' + counter);
  };

  let decrement = (min: number | null) => {
    let minValue = min || 1;

    counter -= minValue;
    console.log('reducing ' + minValue + ' = ' + counter);
  };

  let getCounter = () => {
    return counter;
  };

  return {
    increment: increment,
    decrement: decrement,
    getCounter: getCounter,
  };
}

let f = createCounter(2);

console.log(f);
f.increment(0);
f.increment(5);
f.decrement(0);
f.decrement(2);
