import React from 'react'
import { Container, Jumbotron, Button } from 'react-bootstrap';

export const LandingPage = () => (
    <Container fluid>
        <Jumbotron>
            <h1>React-Bootstrap Demo</h1>
            <p>By Tiffany Nguyen and Ruhee Shrestha</p>
            <Button>Get started</Button>
        </Jumbotron>
    </Container>
);