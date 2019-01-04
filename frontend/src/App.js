import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Search from './screens/Search';
import Results from './screens/Results';
import FourOhFour from './screens/FourOhFour';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/results" component={Results} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
);

export default App;
