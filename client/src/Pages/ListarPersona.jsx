import React, { useState } from 'react';
import imgLog from "../assets/imgLog.jpg";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Side from '../Components/Menu';
import salert from 'sweetalert';
import axios from 'axios';

const Lista =()=>{
    const datos=[];
     axios.get("http://localhost:5000/api/listar")
    .then((response)=>{
        datos=response.data;
    });
    
    return (
        <div>
            
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Identificacion</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map(item =>(
                            <tr key={item._id}>
                                <td>{item.identificacion}</td>
                                <td>{item.nombre}</td>
                                <td>{item.direccion}</td>
                                <td>{item.telefono}</td>
                                <td>{item.correo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
        </div>
    );
}
const ListarPersona = () => {   
    
      
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
                    <Lista />
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer />
        </div> 
    )
}
export default ListarPersona;