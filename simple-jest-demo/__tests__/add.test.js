// import the fn 
const add = require('../add');

// write the test spec 
test('should add two numbers properly', () => {
  // set expectation for the test spec 
  expect(add(10, 20)).toBe(30);

  // sometime writing multiple expectations is recommended
  expect(add(2, 3)).toBe(5);
});

