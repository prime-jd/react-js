import  { useState, useEffect, useCallback, useRef } from 'react';


function Pass_gen(){
    let [password, setPassword]= useState(" ")
    let [number, setNumber]= useState(false)
    let [character, setCharacter]= useState(false)
    let [length, setLength]= useState(4)
    const [counter, setCounter] = useState(0);
    const passwordRef = useRef(null)

    const gen_pass = useCallback(()=> {
      let pass = ""
        let ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let num = "1234567890"
        let spCh = "!@#$%^&*()_+<>?/}{][|"
        if(number)
          ch += num;
        if(character)
          ch += spCh;
        for (let i = 0; i < length; i++) {
            let x= Math.floor(Math.random()*ch.length + 1);
            pass += ch.charAt(x);
        }
        setPassword(pass);
    },[length, number, character,setPassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(()=> { gen_pass() },
    [length, number, character ,gen_pass])


    

    const handleRefresh = () => {
        gen_pass()
        setCounter(prevCounter => prevCounter + 1); // For example, increment a counter
    };

    return(
      <>
        <div className='border-2 p-6 bg-grey-500 border-black border-solid w-full h-46'>
          <h1 className='my-5 text-blue-600'><u><b>PASSWORD GENERATOR</b></u></h1>
          
          <div className='flex'>
          <input type='text'ref={passwordRef} placeholder='password' value={password} className=' border-2 border-black w-full px-2' readOnly />
          <button  className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-700 transition-transform transform rounded-lg border-2 hover:scale-90' onClick={copyPasswordToClipboard}>copy</button>
          </div>
          
          <div className='flex'>
          <div className='flex m-5'>
            <input type='range' className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} min={0} max={100} value={length}></input>
            <label>&nbsp;length:{length}<span></span></label>
          </div>
            <div className='mx-9 my-5'>
              <input type='Checkbox' onChange={() => {
                  setCharacter((prev) => !prev )
              }}></input>
              <label>&nbsp;Character &nbsp;</label>
              <input type='Checkbox' onChange={() => {
                  setNumber((prev) => !prev )
              }}></input>
              <label>&nbsp;Number</label>
           </div> 
          </div>
               
        </div>
        <button className='justify-centre rounded-lg hover:scale-110 m-5 text-white border-black border-2 p-2 bg-blue-500' onClick={handleRefresh}>Refresh</button>
        </>
      
    )
}
export default Pass_gen