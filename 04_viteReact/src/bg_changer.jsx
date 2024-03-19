import { useState } from "react"

function Bg_chg(){
    const [color,setColor] = useState("olive")
    
    return(
        <>
        <div className="bg-white rounded-3xl px-4 justify-center hover:bg-amber-300 ">
        <button onClick={()=>setColor("red") } className="m-4 bg-red-600 rounded-3xl border-black" style={{backgroundColor : "red"}}>Red</button>
        <button className="bg-green-400 rounded-3xl m-4 border-black">Green</button>
        <button className="bg-blue-400 rounded-3xl m-4 border-black">Blue</button>
        </div>
        </>
    )
}
export default Bg_chg