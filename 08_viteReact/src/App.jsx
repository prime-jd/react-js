// App.js
import React, { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContextProvider";
import One from "./Components/One";
import Three from "./Components/Three";

function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const x = { name: "Ravi", work: "Fresher" };
    setUser(x);
  }, [setUser]);

  return (
    <>
      <div>Context API</div>
      <One />
    </>
  );
}

export default App;
