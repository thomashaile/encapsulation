// psst. use the debugger!

function writeMe(arg) { };

// don't change any code below this comment
const obj1 = { thing: undefined };
const bound1 = writeMe.bind(obj1);

const result1a = bound1(4);
const test1a = Number.isNaN(result1a);
console.assert(test1a, 'Test 1.A');

const result1b = bound1('');
const test1b = result1b === 'undefined';
console.assert(test1b, 'Test 1.B');


const obj2 = { thing: true };
const bound2 = writeMe.bind(obj2);

const result2a = bound2(true);
const test2a = result2a === 2;
console.assert(test2a, 'Test 2.A');

const result2b = bound2(-1);
const test2b = result2b === 0;
console.assert(test2b, 'Test 2.B');


const obj3 = { thing: null };
const bound3 = writeMe.bind(obj3);

const result3a = bound3(0);
const test3a = result3a === 0;
console.assert(test3a, 'Test 3.A');

const result3b = bound3(undefined);
const test3b = Number.isNaN(result3b);
console.assert(test3b, 'Test 3.B');
