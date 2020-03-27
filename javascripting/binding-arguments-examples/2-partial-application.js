// if you pass in fewer arguments than the function requires
//  you can pass the remaining ones in later
//  this is called "Partial Application"

function addToWord(boundArgument, freeArgument) {
  this.word += boundArgument + freeArgument;
}

const obj1 = {
  word: ''
};

const boundObj1x = addToWord.bind(obj1, 'x');
const boundObj1y = addToWord.bind(obj1, 'y');

boundObj1x('A');
console.assert(obj1.word === 'xA', 'Test 1');

boundObj1x('B');
console.assert(obj1.word === 'xAxB', 'Test 2');

boundObj1y('C');
console.assert(obj1.word === 'xAxByC', 'Test 3');


const obj2 = {
  word: ''
};

const boundObj2a = addToWord.bind(obj2, 'a');
const boundObj2b = addToWord.bind(obj2, 'b');

boundObj2a('X');
console.assert(obj2.word === 'aX', 'Test 4');

boundObj2b('Y');
console.assert(obj2.word === 'aXbY', 'Test 5');

boundObj2a('Z');
console.assert(obj2.word === 'aXbYaZ', 'Test 6');

