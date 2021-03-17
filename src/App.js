import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import signUpPage from './components/SignUp';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import { LandingPage } from './components/LandingPage';
import { BootstrapNavbar } from './components/Navbar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/signUp"component={signUpPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
