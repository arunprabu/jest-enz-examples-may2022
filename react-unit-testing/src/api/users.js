export const fetchUsersAPI = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
  .then( (res) => {
    if(res.status === 200) {
      return res.json();
    }else{
      throw new Error('Invalid Response');
    }
  })
}