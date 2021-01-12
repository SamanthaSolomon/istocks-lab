import React from "react"

const Stock = (props) => {
    
    const apiKey = "c3bf0bc13098930f65c4771000b2751f"

    const symbol = props.match.params.symbol

    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`

    const [stock, setStock] = React.useState(null)

    const getStock = async () => {
        const response = await fetch (url)
        const data = await response.json()
        setStock(data)
    }

    React.useEffect(() => {
        getStock()
    }, [])
    
    const loaded = () => {
        return(
        <div>
            <h2>Here is the Stock Component</h2>
             <h3>{stock[0].symbol}</h3>
             
        </div>
        )
    }

    const loading = () => {
        return(
            <p>Loading...</p>
        )
    }
    return stock ? loaded () : loading ()
}

export default Stock