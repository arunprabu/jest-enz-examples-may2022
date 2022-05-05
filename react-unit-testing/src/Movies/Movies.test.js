import { render, screen } from '@testing-library/react';
import Movies from "./Movies";

let props = { url: 'www.google.com' };

// it("should render anchor tag and attribute href", () => {
//   const wrapper = shallow(<Movies {...props} />);
//   expect(wrapper.find("a")).toHaveAttribute('href', 'www.google.com'); //
// });

xtest('should render anchor tag and attribute href', () => {
  render(<Movies {...props} />)
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome to movies page!')
})