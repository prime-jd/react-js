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