import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import signUpPage from './components/SignUp';
import Login from './components/Login';
import HomePage from './components/HomePage';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
<BrowserRouter>
        <Container>
        <HeaderComponent />
        <br />
        <Switch>
          <Route path="/home" component={HomePage} exact={true} />
          <Route path="/signUp"component={signUpPage} />
          <Route path="/login" component={Login} />
        </Switch>
        </Container>
      </BrowserRouter>      
    </div>
  );
}

export default App;
