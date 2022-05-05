import React from 'react';
import "./AppInfo.css";

const AppInfo = ({employees,increaseTotal}) => {
  return (
    <div className='app_info'>
      <h1>Employee Accounting</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>Receive an award: {increaseTotal} </h2>
    </div>
  )
}

export default AppInfo