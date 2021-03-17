import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const LandingPage = () => {
    const history = useHistory();

    return (
        <Jumbotron>
            <h1>React-Bootstrap Demo</h1>
            <p>By Tiffany Nguyen and Ruhee Shrestha</p>
            <Button onClick={() => history.push('/signup')}>
                Get Started
            </Button>
        </Jumbotron>
    );
};