import { useState } from "react"
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';


function Hooks(){
     let [counter , setCounter] = useState(15);

     //let counter = 15;             // in this method of declaration we can ypdate value of variable but it is not reflected in UI. this work is done by React
  const CounterVal = () => {        // to reflect all values of counter in ui React introduces some methods these methods are known as Hooks
 //   console.log("added value:",counter)
    if(counter>=20){
        console.log("cannot add more")
    setCounter(20)
    }
    else
    setCounter(counter+1)
}

const deleteVal = ()=>{
    if(counter<=0){
    console.log("cannot delete more");
     setCounter(0)
    }
    else
    setCounter(counter-1)
}

    return(
        <>
        <button onClick={CounterVal}>add value : {counter}</button>
        <button onClick={deleteVal}>remove value : {counter}</button>
        </>
    )
}
export default Hooks