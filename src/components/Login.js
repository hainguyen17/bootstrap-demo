import React from 'react';
import {Col, Card, Form, Button} from 'react-bootstrap';

const LoginForm =  () => {
    return (
<div>
<Card style={{ width: '30rem'}}>
<Card.Title>
   Welcome Back! 
</Card.Title>
<Card.Body>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Remember me"
      />
    </Col>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card.Body>
</Card>
</div>
    )
}

export default LoginForm;



