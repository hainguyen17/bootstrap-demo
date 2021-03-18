import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import signUpPage from './components/SignUp';
import Login from './components/Login';
import {HomePage} from './components/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
<BrowserRouter>
          <Row>
          <Col md>
        <HeaderComponent />
        <br />
        <Switch>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/signup"component={signUpPage} />
          <Route path="/login" component={Login} />
        </Switch>
        </Col>
        </Row>
      </BrowserRouter>      
    </div>
  );
}

export default App;
