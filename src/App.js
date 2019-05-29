import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Fetch from './Fetch';
import CardsList from './components/CardsList';
import './App.css';

import * as ROUTES from './constants/routes';

const App = () => (
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Fetch} />
          <Route path={`/:item`}  component={CardsList}/>
        </Switch>
      </Router>

);



export default App;
