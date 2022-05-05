import {  fireEvent, render, screen } from '@testing-library/react';
import Counter from "./Counter";

// Testing Hooks with counter increment and decrement 
describe('Counter', () => { 
  it("loads with initial state of 0", () => {
    render(<Counter />);
    const counterTxtEl = screen.getByTestId('counterTxt');
    expect(counterTxtEl.textContent).toBe("0");
  });
  
  it("has proper Increment and decrement buttons logic", () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counterTxt');
    const incrementEl = screen.getByTestId("incrementButton");
    const decrementEl = screen.getByTestId("decrementButton");
    expect(countValue.textContent).toBe("0");
    fireEvent.click(incrementEl);
    expect(countValue.textContent).toBe("1");
    fireEvent.click(decrementEl);
    expect(countValue.textContent).toBe("0");
  });
});

