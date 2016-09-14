import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Details from '../components/Details';
import ResultsContainer from '../containers/ResultsContainer';

const App = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:place' component={ResultsContainer} />
      <Route path='details/:place' component={Details} />
    </Route>
  </Router>
 );

export default App;
