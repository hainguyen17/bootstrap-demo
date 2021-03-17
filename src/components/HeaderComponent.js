import React from 'react';
import {Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

const routes = [
  {
    name: 'Layout',
    path: '/layout'
  },
  {
    name: 'Sign Up',
    path: '/signup'
  },
  {
    name: 'Login',
    path: '/login'
  }
];

export const Header = () => {
  const history = useHistory();
  const {pathname} = useLocation();

  return (
    <Navbar bg="dark" variant="dark" className="mb-2">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        {
          routes.map((route) =>
            <Nav.Link
              active={route.path === pathname}
              onClick={() => history.push(route.path)}
            >
              {route.name}
            </Nav.Link>
          )
        }
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}
