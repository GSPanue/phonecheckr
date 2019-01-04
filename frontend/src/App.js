import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './theme';

import Search from './screens/Search';
import Results from './screens/Results';
import FourOhFour from './screens/FourOhFour';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/results" component={Results} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
