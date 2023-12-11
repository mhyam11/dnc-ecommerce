import React from "react"
import dncLogo from "../../assets/logodnc.svg"
import "./index.scss"

const Header = () => {
    return <div className="header">
        <img src={dncLogo} alt="" />
    </div>
}

export default Header;