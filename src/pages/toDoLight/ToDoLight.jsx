import React, { useState, useEffect } from "react";

import TodoList from "./TodoList";

function ToDoLight() {
  const [todos, setTodos] = useState([ ]);
  const [todoTitle,setTodoTitle] = useState('')


  useEffect(() =>{
     const data = localStorage.getItem('todos') || []
     setTodos(JSON.parse(data))
  },[])

  
   useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos))
   },[todos])

  const addTodo = event => {
     if (event.key === 'Enter'){
        setTodos([
           ...todos,
           {
              id: Date.now(),
              title: todoTitle,
              completed:false
           }
        ])
        setTodoTitle('')
     }
    
  }

  return (
    <div>
      <h1> Todo app</h1>
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Default input"
          aria-label="default input example"
          value={todoTitle}
          onChange={e => setTodoTitle(e.target.value)}
          onKeyPress={addTodo}
        />
        <label className="col-sm-2 col-form-label">Todo name</label>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default ToDoLight;
