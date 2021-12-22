import React, { useState } from 'react';
import imgLog from "../assets/imgLog.jpg";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Side from '../Components/Menu';
import salert from 'sweetalert';
import axios from 'axios';

const Dashboard = () => {
    return ( 
        <div className="container">
            <Header />
            <div className="fondo-titulo-login">
                <h6>DashBoard Katastronk</h6>
            </div>
            <br></br>
            <div className="row">
                <div className="col-md-3">
                    <Side />
                </div>
                <div className="col-md-9">
                    <img src={imgLog}/>                
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer />
        </div> 
    )
}
export default Dashboard;