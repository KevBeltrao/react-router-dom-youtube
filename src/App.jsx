import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Oi</h1>

        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact Us</Link>

        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/users" component={Page2} />
          <Route path="/contact" component={Page3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
