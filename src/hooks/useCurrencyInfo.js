import React from 'react'


function useCurrencyInfo(currency){
    const [data, setData] = React.useState({})

    React.useEffect(() =>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.25/v1/currencies/${currency}.json`)
    .then(res => res.json())
    .then(res => setData(res[currency]))
   },[currency])

   return data
}


export default useCurrencyInfo