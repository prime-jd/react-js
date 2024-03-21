const { useState, useCallback, useEffect } = require("react")

function Pass_gen(){
    const [password, setPassword]= useState("")
    const [number, setNumber]= useState(false)
    const [character, setCharacter]= useState(false)
    const [length, setLength]= useState("4")

    const gen_pass = useCallback(()=> {
        const ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        const num = "1234567890"
        const spCh = "!@#$%^&*()_+<>?/}{][|"
        if(number==true)
          ch += num;
        if(character==true)
          ch += spCh;
        for (let i = 0; i < length; i++) {
            let x= Math.floor(Math.random()*ch.length + 1);
            password += ch[x];
        }
        setPassword(password);
    })[length, number, character];

    useEffect(()=> { gen_pass()},
    [length, number,character]);
    return(
        <div className="h-10 w-7"></div>

    )
}
export default Pass_gen