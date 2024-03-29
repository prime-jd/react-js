// Three.jsx
import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContextProvider';

function Three() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>This is Three Component</h2>
      <p>User name from context: {user ? user.name : 'Loading...'}</p>
    </div>
  );
}

export default Three;
