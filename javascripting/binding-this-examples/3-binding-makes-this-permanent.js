// bound functions will always have the same "this" no matter what

// PS. this snippet is written to run in the browser
//  to run it in JS Tutor: replace window with window
//  to run it in Node.js: replace window with global
//  horray for JS compatibility!

function returnThis() {
  return this;
}

const boundToWindow = returnThis.bind(window);

const obj1 = { id: 1 };
const boundToObj1 = returnThis.bind(obj1);

const obj2 = { id: 2 };
const boundToObj2 = returnThis.bind(obj2);


const obj3 = {
  id: 3,
  returnThis,
  boundToWindow,
  boundToObj1,
  boundToObj2
};

const test1 = obj3.returnThis() === obj3;
console.assert(test1, 'Test 1');

const test2 = obj3.boundToWindow() === window;
console.assert(test2, 'Test 2');

const test3 = obj3.boundToObj1() === obj1;
console.assert(test3, 'Test 3');

const test4 = obj3.boundToObj2() === obj2;
console.assert(test4, 'Test 4');
