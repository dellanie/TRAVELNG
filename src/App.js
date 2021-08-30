import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Explore from './Explore';
import Header from './Header';
import Home from './Home';


//header - explore
//search
//body
//footer
//explore page
//destination 

function App() {
  return (
      <div className="app">
        <Router>
          <Header/>

          <Switch>
            <Route path='/explore'>
            <Explore/>
            </Route>

            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
