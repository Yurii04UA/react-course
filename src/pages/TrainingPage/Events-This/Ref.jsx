import React from 'react';
import './Events.css';
import { Component } from 'react';

import { Container, Row,Form} from "react-bootstrap";

class Ref extends Component {
  constructor(props){
    super(props)

  }
  render(){
    return (
      <Container>
       <Row className="mt-5 mb-5">
           <Form>
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
               </Form.Text>
             </Form.Group>
             </Form>
        </Row>
      </ Container>
    ) 
}
}
export default Ref