import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../Overview';
import Form from '../Form';

const Layout = () => (
  <div className='layout'>
    <Switch>
      <Route exact path='/' component={Overview}/>
      <Route path='/form' component={Form}/>
    </Switch>
  </div>
)

export default Layout;
