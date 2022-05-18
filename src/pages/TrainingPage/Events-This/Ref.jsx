import React from "react";
import "./Events.css";
import { Component } from "react";

import { Container } from "react-bootstrap";

class Ref extends Component {
  constructor(props) {
    super(props);
  }


  myRefArr = []
  createRef = (elem) => {
    this.myRefArr.push(elem);
  };
  logger = () =>{
    console.log(this.myRefArr);
  }
  render() {
    return (
      <Container>
        <form className="w-500 border -mt-5 p-3">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label >
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              ref={this.createRef}
              onClick={this.logger}
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
              ref={this.createRef}
              onClick={this.logger}
            ></textarea>
          </div>
        </form>
      </Container>
    );
  }
}
class TextInput extends Component {
  doSmth = () => {
    console.log("sd");
  };
  render() {
    return (
      <input
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
