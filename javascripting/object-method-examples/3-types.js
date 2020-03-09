// psst, be sure to use JS Tutor or Debugger!

const types = {
  "string": [],
  "number": [],
  "boolean": [],
  "undefined": [],
  "object": [],
  addNewValue: function (newValue) {
    const type = typeof newValue;
    this[type].push(newValue);
  },
};

types.addNewValue('hi');
types.addNewValue('bye');
types.addNewValue('');
types.addNewValue('4');
const stringsTest = types.string[0] === 'hi'
  && types.string[1] === 'bye'
  && types.string[2] === ''
  && types.string[3] === '4';
console.assert(stringsTest, 'Test 1');


types.addNewValue(Infinity);
types.addNewValue(NaN);
types.addNewValue(0);
types.addNewValue(12.3);
const numbersTest = types.number[0] === Infinity
  && Number.isNaN(types.number[1])
  && types.number[2] === 0
  && types.number[3] === 12.3;
console.assert(numbersTest, 'Test 2');


types.addNewValue(true);
types.addNewValue(false);
const booleansTest = types.boolean[0] === true
  && types.boolean[1] === false;
console.assert(booleansTest, 'Test 3');


types.addNewValue(undefined);
types.addNewValue();
const undefinedTest = types.undefined[0] === undefined
  && types.undefined[1] === undefined;
console.assert(undefinedTest, 'Test 4');


types.addNewValue(null);
const nullTest = types.object[0] === null;
console.assert(nullTest, 'Test 5');

