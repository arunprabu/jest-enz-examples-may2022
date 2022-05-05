import { render, screen } from '@testing-library/react';
import App from './App'; // Taking up this comp for testing

// group of related test cases - test suite
describe('App Component', () => { 

  // test spec
  test('renders learn react link', () => {
    render(<App />); // let's render the App Comp -- only after rendering we can query thru the dom element 
    const linkElement = screen.getByText(/learn react!/i); // exec by react-testing-lib 
    expect(linkElement).toBeInTheDocument(); // expect, toBeInTheDocument are from JEST 
  });

  // test spec
  it('renders app comp', () => {
    expect(App).toBeTruthy();
  });

});
