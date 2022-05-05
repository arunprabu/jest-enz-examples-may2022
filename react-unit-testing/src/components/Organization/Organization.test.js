import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import Organization from "./Organization";

describe('Organization', () => { 

  // test case #1 -- renders the comp properly
  // it('renders the organization comp properly', () => {
  //   const root = ReactDOM.createRoot(document.createElement("div"));
  //   root.render(<Organization />);
  // });

  // test case #2 -- testing the prop 
  it('should display the props correctly', () => {
    // take the element to put under test
    render(<Organization orgName="Cognizant Pvt Ltd"/>);
    // fetching the element by data-testid orgEl //refer Organization.js file  
    // checking if the props are received correctly 
    expect(screen.getByTestId('orgEl')).toHaveTextContent('Cognizant Pvt Ltd');
  });

  // test case #3 
  it('should have Welcome to My Company\'s Official Website as text', () => {
    render(<Organization />);
    const officialTxtEl = screen.getByText('Welcome to My Company\'s Official Website');
    expect(officialTxtEl).toBeInTheDocument();
  });

  



});

