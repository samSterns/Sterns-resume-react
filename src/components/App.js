import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, browserHistory
} from 'react-router-dom';
import LandingPage from '../containers/LandingPage';

// import EmailForm from '../containers/EmailForm';

import { MediaQueryProvider } from 'react-media-query-hoc';


export default function App() {
  return (
    <MediaQueryProvider>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/"> 
            <LandingPage /> 
          </Route>
        </Switch>
      </Router>
    </MediaQueryProvider>
  );
}
