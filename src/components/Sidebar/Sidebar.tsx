import * as React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (<>
          <Link to={`/`}>Overview</Link>
          <Link to={`/form`}>Form</Link>
    </>);
}

export default Sidebar;