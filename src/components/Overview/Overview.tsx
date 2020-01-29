import * as React from 'react';
import Chart from '../Chart';
import { useRequest } from '../../hooks/useRequest';
import { requestUsers } from '../../api/api';

const Overview = () => {
    const { data, isLoading, error} = useRequest(requestUsers, []);
    console.log(data, isLoading, error);

    return isLoading ? <div>Loading...</div> :
     <div>Total Users: ???
        <Chart/>
    </div>;
}

export default Overview;