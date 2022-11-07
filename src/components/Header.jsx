import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import Credentials from "./Credentials.jsx";


function Header({setErrorMsg, loggedIn, setLoggedIn, setUsername, username}) {


    return (
        <nav className="topnav">
            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
            <NavLink to="/search"><i className="fa fa-fw fa-search"></i> Search</NavLink>
            <NavLink to="/contact"><i className="fa fa-fw fa-envelope"></i> Contact</NavLink>
            {!loggedIn ? (<Login setUsername={setUsername} setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg}  />) :
                (<div>
                    <Credentials username={username}/>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                </div>)}
        </nav>
    );
}

export default Header;
