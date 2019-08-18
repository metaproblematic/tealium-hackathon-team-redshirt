import React from "react";
import logo from './img/Logo_Vizual_Transparent.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} alt="Logo" className="App-logo" />
        </nav >
    );
};

export default NavBar;
