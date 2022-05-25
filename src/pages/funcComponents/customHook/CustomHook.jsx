import React, { useState } from "react";

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
    <form className="border p-3 w-75 m-auto mt-5" >
      <div className="mb-5">
      <input className="form-control" type="text" value={` ${text.value} /  ${textArea.value}`} readOnly/>
        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
          Email address
        </label>
        <input
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
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={textArea.value}
          onChange={textArea.onChange}
        ></textarea>
      </div>
    </form >
  );
};

export default CustomHook;
