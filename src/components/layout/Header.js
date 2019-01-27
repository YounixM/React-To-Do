import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="text-center">
                <h1 className="mb-5 text-bold" style={appNameStyle}>
                    Today's To-Do List
                </h1>

                <div className="mt-3 mb-5">
                    <Link className="text-bold" to="/" style={linkStyle}> Home </Link> |
                   <Link className="text-bold" to="/about" style={linkStyle}> About Us </Link>
                </div>
            </header>
        )
    }
}


const appNameStyle = {
    color: "#1c1919",
    background: "#f2771a",
    display: "inline-block",
    padding: "10px 30px",
    transform: "skewY(-3deg)"
};

const linkStyle = {
    color: "#333",
    display: "inline",
    margin: "0 15px"
}


export default Header;