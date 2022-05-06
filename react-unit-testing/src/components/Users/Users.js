import React, { useEffect, useState } from 'react'
import { fetchUsersAPI } from '../../api/users';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUsersAPI()
    .then((data) => {
      setUsers(data);
    })
    .catch( (e) => {
      setError(true);
    });
  }, []);

  let renderedUsers = null;
  if(users && users.length > 0){
    renderedUsers = users.map((user) => {
      return <div key={user.id}>
        <h3>{user.id}</h3>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
      </div>
    })
  }
  
  return (
    error? <p>Unable to load users</p>: 
    <>
      <h1>Fetch API Testing - Demo</h1>
      <h2>Working with third party API - https://jsonplaceholder.typicode.com/users</h2>
      <div>
        {renderedUsers}
      </div>
    </>
  );
}

export default Users;