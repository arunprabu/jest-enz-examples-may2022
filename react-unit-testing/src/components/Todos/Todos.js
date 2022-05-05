import React, { useEffect, useState } from 'react'


function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      const todoList = await response.json();
      setTodos(todoList);
    };
    fetchPosts();
  }, []);

  const renderedTodos = todos.map((todo) => {
    return <div key={todo.id}>
      <h3>{todo.id}</h3>
      <h4>{todo.title}</h4>
      <p>{todo.completed}</p>
    </div>
  })

  return (
    <>
      <h1>Fetch API With UseState and UseEffect</h1>
      <h2>Working with third party API - https://jsonplaceholder.typicode.com/todos</h2>
      <div>
        {renderedTodos}
      </div>
    </>
  );
}

export default Todos;