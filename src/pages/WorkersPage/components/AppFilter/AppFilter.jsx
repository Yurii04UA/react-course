import React from 'react'
import "./AppFilter.css"

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button 
        className="btn btn-light"
        type='button'>
        All employees
      </button>
      <button 
        className="btn btn-outline-light"
        type='button'>
        Promotion
      </button>
      <button 
        className="btn btn-outline-light"
        type='button'>
        Salary over 1000$
      </button>
    </div>
  )
}

export default AppFilter