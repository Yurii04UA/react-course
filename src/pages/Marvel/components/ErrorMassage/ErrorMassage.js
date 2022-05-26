import React from 'react'
import img from '../ErrorMassage/cat-standing.gif'
import "../ErrorMassage/errorMessage.css"
const ErrorMassage = () => {
  return (
    <>
      <img className='imgg' src={img} alt="error"/>
      <h6 className='mt-2'>Sorry. Something went wrong</h6>
    </>
  )
}

export default ErrorMassage