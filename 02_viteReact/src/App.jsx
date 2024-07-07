import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Custom from './custom.jsx'
import Hooks  from './hooks.jsx';
import Counter from './ComponentLifeCycle.jsx';

function App() {                   // these functions are convertening into objects by bable these functions then redered by render function by passing it in attr <Fun />
  return (
    <>
    <Counter />
    {/* <h1>React js</h1>
      <p>My first react project</p>       
      <Custom /> 
      <Hooks />  
      <Counter />       */}
    </>
  );
}


export default App;

