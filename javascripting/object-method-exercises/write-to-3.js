const obj = {
  arr: [1, 0],
  merge: function (toMerge) { },
  replace: function (newArr) { },
};

obj.merge([4]);
console.assert(obj.arr[0] === 4, 'Test 1');
console.assert(obj.arr[1] === 1, 'Test 2');
console.assert(obj.arr[2] === 0, 'Test 3');

obj.replace(['hi!', 'bye!']);
console.assert(obj.arr[0] === 'hi!', 'Test 4');
console.assert(obj.arr[1] === 'bye!', 'Test 5');

obj.merge([null]);
console.assert(obj.arr[0] === null, 'Test 6');
console.assert(obj.arr[1] === 'hi!', 'Test 7');
console.assert(obj.arr[2] === 'bye!', 'Test 8');

obj.merge(obj.arr);
console.assert(obj.arr[0] === null, 'Test 9');
console.assert(obj.arr[1] === 'hi!', 'Test 10');
console.assert(obj.arr[2] === 'bye!', 'Test 11');
console.assert(obj.arr[3] === null, 'Test 12');
console.assert(obj.arr[4] === 'hi!', 'Test 13');
console.assert(obj.arr[5] === 'bye!', 'Test 14');
