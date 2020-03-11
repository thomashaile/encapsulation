const obj = {
  state: {
    biggest: -Infinity,
    smallest: Infinity,
    all: []
  },
  addNumber: function (newValue) { }
};

const returned1 = obj.addNumber(0);
console.assert(returned1 === true, 'Test 1');
console.assert(obj.state.all.length === 1, 'Test 2');
console.assert(obj.state.biggest === 0, 'Test 3');
console.assert(obj.state.smallest === 0, 'Test 4');

const returned2 = obj.addNumber(1);
console.assert(returned2 === true, 'Test 5');
console.assert(obj.state.all.length === 2, 'Test 6');
console.assert(obj.state.biggest === 1, 'Test 7');
console.assert(obj.state.smallest === 0, 'Test 8');

const returned3 = obj.addNumber(-1);
console.assert(returned3 === true, 'Test 9');
console.assert(obj.state.all.length === 3, 'Test 10');

const returned4 = obj.addNumber(-0.5);
console.assert(returned4 === true, 'Test 11');
console.assert(obj.state.all.length === 4, 'Test 12');
console.assert(obj.state.biggest === 1, 'Test 13');
console.assert(obj.state.smallest === -1, 'Test 14');

const returned5 = obj.addNumber('0');
console.assert(returned5 === false, 'Test 15');

const returned6 = obj.addNumber(true);
console.assert(returned6 === false, 'Test 16');

const returned7 = obj.addNumber(null);
console.assert(returned7 === false, 'Test 17');

const returned8 = obj.addNumber(undefined);
console.assert(returned8 === false, 'Test 18');

console.assert(obj.state.all.length === 4, 'Test 19');
console.assert(obj.state.biggest === 1, 'Test 20');
console.assert(obj.state.smallest === -1, 'Test 21');

