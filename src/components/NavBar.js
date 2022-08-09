import React from "react";
import "../assets/css/styles.css"

function NavBar() {
    return (
        <nav>
            <div className="logo-container">
                <img className="navbar--logo" src={require('../assets/images/navbar-logo.jpeg')} alt="Navigation bar logo" />
            </div>
            <div className="app--name">Avatar Generator</div>
        </nav>
    )
}
export default NavBar;