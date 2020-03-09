const obj = {
  arr: [],
  merge: function (toMerge) { },
  replaceAll: function (newEntry) { },
  getRemixed: function (mixer) { },
  getCopy: function () { }
};

obj.merge([1, 2]);
console.assert(obj.arr[0] === 1, 'Test 1');
console.assert(obj.arr[1] === 2, 'Test 2');

obj.replaceAll('~');
console.assert(obj.arr[0] === '~', 'Test 3');
console.assert(obj.arr[1] === '~', 'Test 4');

const remixed = obj.getRemixed('|');
obj.merge([remixed]);
console.assert(obj.arr[0] === '~|~', 'Test 5');
console.assert(obj.arr[1] === '~', 'Test 6');
console.assert(obj.arr[2] === '~', 'Test 7');

console.assert(obj.getCopy() !== obj.arr, 'Test 8');
console.assert(obj.getCopy()[0] === '~|~', 'Test 9');
console.assert(obj.getCopy()[1] === '~', 'Test 10');
console.assert(obj.getCopy()[2] === '~', 'Test 11');

const finalRemix = obj.getRemixed('*');
console.assert(finalRemix === '~|~*~*~', 'Test 12');
