const obj = {
  array: ['hi!'],
  getArray: function () { },
  getCopy: function () { },
};

const returnedArray1 = obj.getArray();

const test1 = returnedArray1 === obj.array;
console.assert(test1, 'Test 1');

const copiedArray1 = obj.getCopy();

const test2 = copiedArray1 !== obj.array;
console.assert(test2, 'Test 2');

const test3 = copiedArray1[0] === obj.array[0];
console.assert(test3, 'Test 3');

obj.array = [0, 1];
const returnedArray2 = obj.getArray();

const test4 = returnedArray2 === obj.array;
console.assert(test4, 'Test 4');

const copiedArray2 = obj.getCopy();

console.assert(copiedArray2 !== obj.array, 'Test 5');
console.assert(copiedArray2[0] === obj.array[0], 'Test 6');
console.assert(copiedArray2[1] === obj.array[1], 'Test 7');

obj.array = [null, undefined, false];
const returnedArray3 = obj.getArray();

const test8 = returnedArray3 === obj.array;
console.assert(test8, 'Test 8');

const copiedArray3 = obj.getCopy();
console.assert(copiedArray3 !== obj.array, 'Test 9');
console.assert(copiedArray3[0] === obj.array[0], 'Test 10');
console.assert(copiedArray3[1] === obj.array[1], 'Test 11');
console.assert(copiedArray3[2] === obj.array[2], 'Test 12');
