import * as React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
          <Link to={`/`}>Overview</Link>
          <Link to={`/form`}>Form</Link>
        </div>
    );
}

export default Sidebar;