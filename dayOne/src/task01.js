// @flow

let array: Array<number> = [1, 2, 3, 4, 5];

let doublearray = array.map((num) => {
  return num * 2;
});

console.log(doublearray);
