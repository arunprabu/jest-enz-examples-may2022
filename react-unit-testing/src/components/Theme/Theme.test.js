// How to Testing User Generated Events with React Testing Library
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Theme from "./Theme";

it("has theme button toggle", () => {
  render(<Theme />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});