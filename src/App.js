import logo from './logo.svg';
import './App.css';
import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Gallery" component={Gallery} />
      <Redirect to ="/" />
    </Switch>
  );
}

export default App;
