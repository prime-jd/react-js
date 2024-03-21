import  { useState, useEffect, useCallback } from 'react';


function Pass_gen(){
    let [password, setPassword]= useState("")
    let [number, setNumber]= useState(false)
    let [character, setCharacter]= useState(false)
    let [length, setLength]= useState("4")

    let gen_pass = useCallback(()=> {
        let ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let num = "1234567890"
        let spCh = "!@#$%^&*()_+<>?/}{][|"
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

    useEffect(()=> { gen_pass},
    [length, number,character]);
    return(
        <div className="bg-grey-400 bg">reactLogo</div>

    )
}
export default Pass_gen