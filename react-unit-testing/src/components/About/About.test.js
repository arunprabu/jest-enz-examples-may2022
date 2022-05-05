import About, { add } from './About';

// test suite -- group of related test case
describe('About', () => {
  it('should be available within the app', () => {
    expect(About).toBeDefined();
  });
  
  it('should add two numbers', () => {
    expect(add(10, 20)).toEqual(30); 
    expect(add(1, 2)).toEqual(3); 
  });
});

