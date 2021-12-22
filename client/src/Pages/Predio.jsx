import React, { useState } from 'react';
//import imgLog from "../assets/imgLog.jpg";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Side from '../Components/Menu';
import salert from 'sweetalert';
import axios from 'axios';




const Guardar = async(identificacion, nombre,direccion, telefono, correo,usuario, password, rol) =>{
    try{
        
        /*const res = await axios({
            method: 'postt',
            url: `http://localhost:5000/api/login?user=${usuario}&pass=${password}`,
            responseType: 'json'
        });     
        if (res.data.length==0){
            salert("este man no esta registrado");
        }else{
            salert("bienvenido a Katastronk "+res.data[0].nombre);
            
            this.context.router.push("/dashboard")
            
            console.log(res.data);
        }*/
        axios.post("http://localhost:5000/api/crear-persona", {
            
            identificacion,
            nombre,             
            direccion,
            telefono, 
            correo, 
            usuario, 
            password,
            rol,
        }).then((response) => {
            console.log(response);
            salert("Nuevo usuario creado", "BIENVENIDO", "success");
            
        });
        
    } catch(error){
        console.log(error);
    }
}
const Predio = () => {
    const id="";
    const [area, setArea]=useState("");
    const [area_construida, setAreaConstruida]= useState("");
    const [direccion, setDireccion]= useState("");    

    const onSubmitHandler = (e) =>{
        e.preventDefault();        
        Guardar(id, area, area_construida,direccion);
        setArea("");
        setAreaConstruida("");
        setDireccion("");        
    };
    
    
    return ( 
        <div className="container">
            <Header />            
            <div className="fondo-titulo-login">
                <h6>Registro de Predios Katastronk</h6>
            </div>
            <br />
            <div className="row">
                <div className="col-md-3">
                    <Side />
                </div>
                <div className="col-md-9">
                    <h4>Favor Diligenciar en Formulario de Registro</h4>
                    <div className="fondo-login">
                        <div className="box-form">
                            <form onSubmit={onSubmitHandler}>
                                <h5>Datos del Propietario</h5>
                                <div className="mb-3">                          
                                    <p>Nombre:</p>
                                    <p>Identificacion:</p>
                                </div>                                
                                <h5>Datos del Predio</h5>
                                <div className="mb-3">                          
                                    <input type="text" className="form-control" placeholder="Area" value={area} onChange={(e) => setArea(e.target.value)}/>                          
                                </div>                                
                                <div className="mb-3">                          
                                    <input type="text" className="form-control" placeholder="Area Construida" value={area_construida} onChange={(e) => setAreaConstruida(e.target.value)}/>                          
                                </div>
                                <div className="mb-3">                          
                                    <input type="text" className="form-control" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>                          
                                </div>
                                <button type="submit" className="btn btn-warning ">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Footer />
        </div>
    );
}

export default Predio;