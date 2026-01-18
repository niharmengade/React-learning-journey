import { useEffect,useState } from "react";
// This is a custom hook made to practice React hooks and fetching data from an api 
function useCurrencyInfo(currency){
    const [data,setdata]=useState({});
    useEffect(()=>{
        fetch(`https://currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
        // we have first converted the response file to json format previously it was a string 
        // then we have used useState to set the data and the we,ve accessed the currency object from the res[currency] we can access the 
        // we can access the currency object with square brackets rather than a dot!!
        
        // when ever there is change in currency this useEffect will run thats why it is in dependency array 
    },[currency])
    //we return the data object which constians all the currency info
    return data;
}

export default useCurrencyInfo;
    