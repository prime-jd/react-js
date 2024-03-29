// One.jsx
import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContextProvider';
import Three from './Three';

function One() {


  return (
    <div>
      <h2>This is One Component</h2>
       <Three />
    </div>
  );
}

export default One;
