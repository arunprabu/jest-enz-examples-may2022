/*1. Mocking Component with JEST */

/*2. For Mocking REST API Calls using JEST Refer users.test.js */

/* Here we have Component1, which is dependent on Component 2 & 3.
While Unit testing Component1, we can replace the Component2 & Component3
 using Jest Mocks with their fake or mocked counterparts.
Let's see how we can set up these mocks. We will use simple Components with
 an Html text placed inside a div. Also Refer Component2 and Component3.
*/

import React from 'react'
import {render} from '@testing-library/react'
import Component1 from './Component1';
  
// arrange - mock setup
jest.mock('./Component2', () => {
  // here we return faked / mocked component with JSX
  return () => <div id="mockComponent2">Hello Mock Component2</div>
})

jest.mock('./Component3', () => () => <div id="mockComponent3">Hello Mock Component3</div>)

describe("mock component tests", () => {
  test("mocked components in react", () => {
    // act
    const { container } = render(<Component1 />);

    // assert
    console.log(container.outerHTML)
    const mockComponent2 = container.querySelector('div#mockComponent2')
    const mockComponent3 = container.querySelector('div#mockComponent3')
    expect(mockComponent2).toBeInTheDocument()
    expect(mockComponent3).toBeInTheDocument()
  })
})