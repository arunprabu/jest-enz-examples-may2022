import { render, screen } from '@testing-library/react';
import Movies from "./Movies";

let props = { url: 'www.google.com' };

it('should have Welcome to movies page! text', () => {
  render(<Movies {...props} />);
  const headingEl = screen.getByRole('heading');
  expect(headingEl).toHaveTextContent('Welcome to movies page!');
});