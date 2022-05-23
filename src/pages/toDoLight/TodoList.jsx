import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
     <ul>
        {props.todos.map(item => <TodoItem key={item.id} {...item} />)}
     </ul>
   //  <div><TodoItem todos={props.todos[0]}/></div>
  )
}

export default TodoList