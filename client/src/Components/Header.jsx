import React from 'react';
import logo from "../assets/logo.jpg";
import {Link} from "react-router-dom";

const Header = () => {
    return ( 
        <div className="container">
            <Link to="/">
                <img src={logo} />
            </Link>
            <h5><strong>Bienvenido</strong></h5>
            <h6>Sucursal Virtual de Katastronk</h6>
            <br></br>
        </div>
        
    );
}

export default Header;