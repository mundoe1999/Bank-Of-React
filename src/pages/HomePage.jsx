import React from 'react';
import {Link} from 'react-router-dom';


import Balance from '../components/Balance'

const HomePage = () => {
  return(
    <div>
      <Balance/>
      <ul>
        <li><Link to='/debit'>View Debits</Link></li>
        <li><Link to='/credit'>View Credit</Link></li>
      </ul>
    </div>
  )
}
export default HomePage;