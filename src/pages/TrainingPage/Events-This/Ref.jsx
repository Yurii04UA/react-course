import React from "react";
import { useRef, useState, useEffect } from "react";
import "./Events.css";
import { Component } from "react";

import { Container } from "react-bootstrap";

const Ref = () => {
  const [text, setText] = useState("");

  const myRef = useRef(1);
  const focusFirstTI = () => {
    myRef.current.focus();
  };

  useEffect(() =>{ 
    console.log(myRef.current);
  })
  return (
    <Container>
      <form className="w-500 border -mt-5 p-3">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <Field
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={e => setText(e.target.value)}
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
            // onClick={focusFirstTI}
            onClick={()=> myRef.current++}
          ></Field>
        </div>
      </form>
    </Container>
  );
};
class TextInput extends Component {
  doSmth = () => {
    console.log("sd");
  };
  render() {
    return (
      <Field
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        ref={this.myRef}
      />
    );
  }
}

export default Ref;
