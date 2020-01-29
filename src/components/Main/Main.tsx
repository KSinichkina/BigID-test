import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../Overview';
import Form from '../Form';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Overview}/>
      <Route path='/form' component={Form}/>
    </Switch>
  </main>
)

export default Main;
