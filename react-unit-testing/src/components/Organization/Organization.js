import React, { useState } from 'react';

const Organization = (props) => {
  const [ company, setCompany ] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setCompany(event.target.value);
  }

  return (
    <div>
      <h2>Organization Info!</h2>
      <h3>Welcome to My Company's Official Website</h3>
      <p data-testid="orgEl">{props.orgName}</p>

      <input type="text" value={company} onChange={handleChange} data-testid="companyNameInput" />
    </div>
  )
}

export default Organization;