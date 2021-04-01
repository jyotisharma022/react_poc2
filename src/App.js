import './App.scss';
import { MyProperties } from './components/property/MyProperties';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Analytics from './components/analytics/Analytics';

// function Home() {
//   return <h1>home....</h1>
// }
// function About() {
//   return <h1>About....</h1>
// }

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path='/' exact={true} component={MyProperties} />
          <Route path='/Analytics' component={Analytics} /> 
        </Switch>
        </Router>
    </div>
  );
}

export default App;
