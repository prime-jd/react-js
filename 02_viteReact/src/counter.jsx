import { useState } from "react"



function Counter(){
    const [counter, setCounter] = useState(15)
    const addVal = ()=>{
        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1)
        setCounter((prevCounter)=>prevCounter+1)
        setCounter((prevCounter)=>prevCounter+1)
        setCounter((prevCounter)=>prevCounter+1)
        setCounter((prevCounter)=>prevCounter+1)
    }
    return(
        <button onClick={addVal}>Add value :{counter}</button>
    )
}
export default Counter;