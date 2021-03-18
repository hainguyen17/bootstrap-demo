import React from 'react';
import {Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

export const Header = () => {
  const history = useHistory();
  const {pathname} = useLocation();

  return (
    <Navbar bg="dark" variant="dark" className="mb-2">
      <Navbar.Brand onClick={() => history.push('/')}>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link
            active={pathname === '/layout'}
            onClick={() => history.push('/layout')}
          >
            Layout
          </Nav.Link>
          <Nav.Link
            active={pathname === '/signup'}
            onClick={() => history.push('/signup')}
          >
            Sign Up
          </Nav.Link>
          <Nav.Link
            active={pathname === '/login'}
            onClick={() => history.push('/login')}
          >
            Login
          </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}
