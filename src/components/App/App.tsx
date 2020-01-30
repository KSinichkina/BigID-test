import * as React from 'react';
import Layout from '../Layout';
import Sidebar from '../Sidebar';
import './App.scss';

const App = () => (
    <div className='body'>
      <Sidebar />
      <Layout />
    </div>
  )

export default App;