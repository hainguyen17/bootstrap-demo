import React, {useState} from 'react';
import {Card, InputGroup, Form, Button} from 'react-bootstrap';

function SignUpForm(){
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
        
            setValidated(true);
    };
        
        return (
    <div>
        <Card style={{ width: '30rem' }}>
            <Card.Title>
                Sign Up
            </Card.Title>
            <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Ruhee"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Shrestha"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Group md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <br />
        <Form.Group>
        <Form.Label htmlFor="inputPassword6">Password</Form.Label>
         <Form.Control
      type="password"
      className="mx-sm-3"
      id="inputPassword6"
      aria-describedby="passwordHelpInline"
    />
    <Form.Text id="passwordHelpInline" muted>
      Must be 8-20 characters long.
    </Form.Text>
  </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Card.Body>
    </Card>
  </div>
        )
        
        }


export default SignUpForm;



