import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'                // the file is imported in main jsx for rendering it on UI
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(        // render() function takes the input of imported file methods or objects and create a virtual dom according to heirarchy of elements in function ,then its compares it with actual dom and applied required changes to its components with their lifecycle 
  <React.StrictMode>
    <App />                                                        
  </React.StrictMode>,
)
