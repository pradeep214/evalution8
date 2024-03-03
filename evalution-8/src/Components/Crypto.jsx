import React, { useEffect, useState } from 'react'

function Crypto() {

    const [data, setData] = useState([])
    const list =


        useEffect(() => {
            async function Fetchdata() {
                let responce = await fetch("https://www.coingecko.com/en/api")
                const data = responce.json()
                setData(data)
                console.log(data);
            }
            Fetchdata()
        }, [])
    return (
        <div><h1>
            Crypro Currency</h1></div>
    )
}

export default Crypto