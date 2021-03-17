import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { toast } from 'react-toastify';

export const BootstrapNavbar = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => toast.info('You clicked on the Brand!')}>Bootstrap Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link onClick={() => toast.info('This should bring you somewhere')}>Some Menu Item</Nav.Link>
        </Navbar.Collapse>
    </Navbar>
);