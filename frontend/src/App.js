import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Provider from './components/Provider';

import Search from './screens/Search';
import Results from './screens/Results';
import Product from './screens/Product';
import FourOhFour from './screens/FourOhFour';

const App = () => (
  <Provider>
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/results" component={Results} />
        <Route path="/product" component={Product} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
