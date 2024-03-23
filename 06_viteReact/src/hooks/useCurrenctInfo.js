import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        ).then((res)=> (res.json))
        .then(data=>data[currency])
    },[currency])
}