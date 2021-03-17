import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/HeaderComponent';
import signUpPage from './components/SignUp';
import Login from './components/Login';
import { LandingPage } from './components/LandingPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container style={{
        maxWidth: '1440px'
      }}>
        <Switch>
          <Route path="/" component={LandingPage} exact={true} />
          <Route path="/signUp"component={signUpPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
