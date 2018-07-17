/* @Flow */
function isEqual(item1: Object, item2: Object) {
  if (
    item1 == null ||
    item2 == null ||
    typeof item1 === 'string' ||
    typeof item2 === 'boolean' ||
    typeof item1 === 'number'
  ) {
    return item1 === item2;
  }

  if (Array.isArray(item1) && Array.isArray(item2)) {
    return isEqualArray(item1, item2);
  }

  return isObjectEqual(item1, item2);
}

function isEqualArray(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

function isObjectEqual(object1: Object, object2: Object) {
  if (object1 === object2) {
    return true;
  }

  let propObject1: Array<string> = Object.keys(object1);
  let propObject2: Array<string> = Object.keys(object2);

  if (propObject1.length !== propObject2.length) {
    return false;
  } else {
    for (let prop: string of propObject1) {
      switch (typeof object1[prop]) {
        case null:
        case undefined:
        case `string`:
        case `boolean`:
        case `number`:
          if (object1[prop] !== object2[prop]) {
            return false;
          }
        default:
          if (!isEqual(object1[prop], object2[prop])) {
            return false;
          }
      }
    }
  }

  return true;
}

let object1: Object = {
  isStudent: true,
  name: `Johan`,
  ID: 1,
  pets: {cat: 1, dog: 2},
  grades: [`A`, `B`, `A`],
};
let object2: Object = {
  name: `Johan`,
  ID: 1,
  isStudent: true,
  pets: {cat: 1, dog: 2},
  grades: [`A`, `B`, `A`],
};

console.log(isObjectEqual(object1, object2));
