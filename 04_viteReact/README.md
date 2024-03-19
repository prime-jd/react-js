# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Projects

## Background color changer

``` javascript
import React, { useState } from 'react';

function Bg_chg() {
    const [color, setColor] = useState("olive");

    return (
    <>
      <div className='fixed inset-0 overflow-hidden' style={{backgroundColor : color}} >
        <div className={`flex  rounded-3xl px-2 justify-center`}>
            <button onClick={() => setColor("red")} className="outline-none m-2 bg-red-600 rounded-3xl border-black" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none bg-green-400 rounded-3xl m-2 border-black" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setColor("blue")} className="outline-none bg-blue-400 rounded-3xl m-2 border-black" style={{backgroundColor: "blue"}}>Blue</button>
        </div>
      </div>
    </>
    );
}

export default Bg_chg;
```

In the Bg_chg component you provided, the style attribute is used to apply inline CSS styles to the outermost div element. Let's break down how it's used:

```
style={{backgroundColor : color}}
```