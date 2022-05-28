import React from 'react'
import { NavLink } from 'react-router-dom'


const HigherOrderComponent = () => {
  return (
    <div>
       <NavLink className='link container mb-3 w-75' to='/func-components'> ← Back</NavLink>
       
       <p>Компонент высшего порядка (Higher-Order Component, HOC)</p>
      
       </div>
  )
}

export default HigherOrderComponent