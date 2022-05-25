import React, { useState } from "react";

const CustomHook = () => {
   const [text,setText] = useState('')
   const [textArea, setTextArea] = useState('')

   // валидация проверяет на налицие цифр, если цифра вернет тру
   // const validateInput = (text) => {
   //    if(text.search(/\d/) >= 0){
   //       return true
   //    }else{
   //       return false
   //    }
   // }
   // та же запись но короче ↓

   const validateInput = (text) =>{
      return text.search(/\d/) >= 0
   }
   const color = validateInput(text) ? 'text-danger': null
  return (
    <form className="border p-3 w-75 m-auto mt-5" >
      <div className="mb-5">
      <input className="form-control" type="text" value={` ${text} /  ${textArea}`} readOnly/>
        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
          Email address
        </label>
        <input
          type="email"
          className={`form-control ${color}`}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={e => setText(e.target.value)}
          value={text}
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
          value={textArea}
          onChange={e => setTextArea(e.target.value)}
        ></textarea>
      </div>
    </form >
  );
};

export default CustomHook;
