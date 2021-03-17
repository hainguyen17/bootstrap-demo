import React from 'react';
import {Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export const Header = () => (
  <Navbar bg="dark" variant="dark" className="mb-2">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
    <LinkContainer to="/signup">
      <Nav.Link>Sign Up </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
      <Nav.Link>Login </Nav.Link>
      </LinkContainer>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
);
