import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return(
        <div className ="nac">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/dashboard">
                <div>Stocks</div>
            </Link>    
            <Link to="/about">
                <div>About</div>
            </Link>
        </div>
    )
}

export default Nav