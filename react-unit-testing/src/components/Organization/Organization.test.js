import { fireEvent, render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import Organization from "./Organization";
import renderer from 'react-test-renderer';

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

  // test case #4 -- to test events in react
  it('should update text input when onChange occurs', () => {
    render(<Organization />);
    // finding the element using getByTestId 'companyNameInput'
    const companyNameInputEl =  screen.getByTestId('companyNameInput');
    // now check whether onChange working or not 
    // mock fire change event -- with the value 
    fireEvent.change(companyNameInputEl, { target: {value: 'test123'}});
    // finally check if the input is getting the updated data
    expect(companyNameInputEl.value).toBe('test123');
  });

  // snapshot testing
  it('should have right company comp snapshot', () => {
    // to take snapshot we need a tool 'react-test-renderer' -- npm i react-test-renderer -D 
    const snapShotTree = renderer.create(<Organization orgName="Cognizant Pvt Ltd"/> ).toJSON();
   // console.log(snapShotTree);
    expect(snapShotTree).toMatchSnapshot();
  });

});

