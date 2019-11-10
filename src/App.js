import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';

import LandingPage from './containers/LandingPage/LandingPage';
import ComparePage from './containers/ComparePage/ComparePage';

class App extends React.Component {
  render () {
    let routes = (
      <Switch>
        <Route path ='/compare' component={ComparePage} />
        <Route path ='/' exact component={LandingPage} />
        <Redirect to ='/' />
      </Switch>
    );
  
    return (
      <div className="App">
        <header className="App-header">
          {routes}
        </header>
      </div>
    );  
  }
}

export default App;
