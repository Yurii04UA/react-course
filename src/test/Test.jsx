import React from 'react'
const Header = () => {
   return <h2> Hello world!!!</h2>;
 };
 const Field = () => {
   const holder = "Enter here";
   return <input type="text" placeholder={holder} />;
 };
 
 const Btn = () => {
   const text = "Log in";
   // const res = () => {
   //   return 'Log in'
   // }
   const logged = true;
   return <button>{logged ? "Enter" : text}</button>;
 };


const Test = () => {
  return (
    <div>
      <Header/>
      <Field />
      <Btn />
    </div>
  )
}

export default Test