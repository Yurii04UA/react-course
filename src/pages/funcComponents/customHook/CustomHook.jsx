import React, { useState } from "react";
import {NavLink}from 'react-router-dom'

function useInputWithValidate(initValue){
   const [value,setValue] = useState(initValue)

   const onChange = event => setValue(event.target.value)
   const validateInput = () =>{
      return value.search(/\d/) >= 0
   }

   return {value, onChange, validateInput}
}

const CustomHook = () => {
  const text = useInputWithValidate('')
  const textArea = useInputWithValidate('')

   // валидация проверяет на налицие цифр, если цифра вернет тру
   // const validateInput = (text) => {
   //    if(text.search(/\d/) >= 0){
   //       return true
   //    }else{
   //       return false
   //    }
   // }
   // та же запись но короче ↓

   
   const color = text.validateInput() ? 'text-danger': null
  return (
    <>
    <NavLink className='link container mb-3  w-75' to='/func-components'> ← Back</NavLink>
    <form className="border p-3 w-75 m-auto mt-5" >
      <div className="mb-5">
      <Field className="form-control" type="text" value={` ${text.value} /  ${textArea.value}`} readOnly/>
        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
          Email address
        </label>
        <Field
          type="email"
          className={`form-control ${color}`}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={text.onChange}
          value={text.value}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <Field
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={textArea.value}
          onChange={textArea.onChange}
        ></Field>
      </div>
    </form >
    </>
    
  );
};

export default CustomHook;
