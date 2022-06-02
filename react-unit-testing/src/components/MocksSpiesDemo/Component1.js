import React from 'react'
import Component2 from './Component2'
import Component3 from './Component3'

const Component1 = () => {
  return (
    <div>
      <div id="component1">Hello Component1</div>
      <Component2 />
      <Component3 />
    </div>
  )
}

export default Component1