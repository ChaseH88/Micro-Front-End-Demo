import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

// Components
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => (
  <div id='marketing-component'>
    <StylesProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/pricing' component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  </div>
)

export { App };
