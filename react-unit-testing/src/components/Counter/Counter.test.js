import {  fireEvent, render, screen } from '@testing-library/react';
import Counter from "./Counter";

// Testing Hooks with counter increment and decrement 
describe('Counter', () => { 
  it("loads with initial state of 0", () => {
    render(<Counter />);
    const counterTxtEl = screen.getByTestId('counterTxt');
    expect(counterTxtEl.textContent).toBe("0");
  });
  
  it('has proper increment and decrement buttons', () => {
    render(<Counter />);
    const counterTxtEl = screen.getByTestId('counterTxt');
    // finding the two buttons 
    const incrementBtnEl = screen.getByTestId('incrementButton');
    const decrementBtnEl = screen.getByTestId('decrementButton');
    // before mock firing the event, let's check whther the initial count is 0
    expect(counterTxtEl.textContent).toBe("0");
    // let's mock fire the event  of increment button
    fireEvent.click(incrementBtnEl);
    expect(counterTxtEl.textContent).toBe("1");

    // let's mock fire the event  of decrement button
    fireEvent.click(decrementBtnEl);
    expect(counterTxtEl.textContent).toBe("0");
  });
});

