import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import { material } from './theme';

import Search from './screens/Search';
import Results from './screens/Results';
import FourOhFour from './screens/FourOhFour';

const App = () => (
  <MuiThemeProvider theme={material}>
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/results" component={Results} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;
