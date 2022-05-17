import React from "react";

import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";

const BootstrapTest = (props) => {
  return (
    //// TEST REACT PROPS.CHILDREN ↓
    <Container className="mt-5 mb-5">
      <Row>
        <Col>{props.left} left</Col>
        <Col>{props.right} right</Col>
      </Row>
    </Container>

    //// TEST BOOTSTRAP ↓
    // <Container>
    //   <Row >
    //     <Col>1 of 2</Col>
    //     <Col>2 of 2</Col>
    //   </Row>
    //   <Row>
    //     <Col>1 of 3</Col>
    //     <Col>2 of 3</Col>
    //     <Col>3 of 3</Col>
    //     <Col>3 of 3</Col>
    //   </Row>
    //   <Row className="mt-5 mb-5">
    //     <Col>
    //       <Form>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="Enter email" />
    //           <Form.Text className="text-muted">
    //             We'll never share your email with anyone else.
    //           </Form.Text>
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control type="password" placeholder="Password" />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //           <Form.Check type="checkbox" label="Check me out" />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //           Submit
    //         </Button>
    //       </Form>
    //     </Col>
    //     <Col>
    //       <Carousel>
    //         <Carousel.Item>
    //           <img
    //             className="d-block w-100"
    //             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    //             alt="First slide"
    //           />
    //           <Carousel.Caption>
    //             <h3>First slide label</h3>
    //             <p>
    //               Nulla vitae elit libero, a pharetra augue mollis interdum.
    //             </p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className="d-block w-100"
    //             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg"
    //             alt="Second slide"
    //           />

    //           <Carousel.Caption>
    //             <h3>Second slide label</h3>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className="d-block w-100"
    //             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-versailles-gardens.jpg"
    //             alt="Third slide"
    //           />

    //           <Carousel.Caption>
    //             <h3>Third slide label</h3>
    //             <p>
    //               Praesent commodo cursus magna, vel scelerisque nisl
    //               consectetur.
    //             </p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //       </Carousel>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default BootstrapTest;
