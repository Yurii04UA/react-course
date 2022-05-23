import React, { useState } from 'react'
import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";
const TodoItem = ({id,title,completed}) => {
  const [checked, setChecked] = useState(completed)

  let color = {color:'black'}
  if(checked){
    color = {
      color:'red',
      textDecoration: 'line-through'
    }
  }
  return (
    <div className='Container'>
      <li >
        <label className='m-3'>
          <input type="checkbox" onChange={() => setChecked(!checked)} />
        </label>
        <span style={color} className='m-3'>{title}</span>
        <i className='m-3'> delete </i>
      </li>
    </div>
  )
}

export default TodoItem