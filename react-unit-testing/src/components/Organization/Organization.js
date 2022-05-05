import React from 'react';

const Organization = (props) => {
  return (
    <div>
      <h2>Organization Info</h2>
      <h3>Welcome to My Company's Official Website</h3>
      <p data-testid="orgEl">{props.orgName}</p>
    </div>
  )
}

export default Organization;