import React, { useState } from 'react';
import imgLog from "../assets/imgLog.jpg";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Side from '../Components/Menu';
import salert from 'sweetalert';
import axios from 'axios';




const Guardar = async(identificacion, nombre,direccion, telefono, correo,user, pass, rol) =>{
    try{
        
        axios.post("http://localhost:5000/api/guardar", {            
            identificacion,
            nombre,             
            direccion,
            telefono, 
            correo, 
            user, 
            pass,
            rol,
        }).then((response) => {
            console.log(response);
            salert("Nuevo usuario creado", "BIENVENIDO", "success");
            
        });
        
    } catch(error){
        console.log(error);
    }
}
const Register = () => {
    const id="";
    const [identificacion, setIdentificacion]=useState("");
    const [nombre, setNombre]= useState("");
    const [direccion, setDireccion]= useState("");
    const [telefono, setTelefono]= useState("");
    const [correo, setCorreo]= useState("");
    const [user, setUsuario] = useState("");
    const [pass, setPassword] = useState("");
    const [rol, setRol] = useState("externo");

    const onSubmitHandler = (e) =>{
        e.preventDefault();        
        Guardar(identificacion, nombre,direccion, telefono, correo,user, pass, rol);
        setIdentificacion("");
        setNombre("");
        setDireccion("");
        setTelefono("");
        setCorreo("");
        setUsuario("");
        setPassword("");
        setRol("externo");
    };
    
    
    return ( 
        <div className="container">
            <Header />            
            <div className="fondo-titulo-login">
                <h6>Registrate en Katastronk</h6>
            </div>
            <br />
            <div className="row">
                <div className="col-md-3">
                    <Side />
                </div>
                <div className="col-md-9">
                    <h4>Favor Dilegenciar en Formulario de Registro</h4>
                    <div className="fondo-login">
                        <div className="box-form">
                            <form onSubmit={onSubmitHandler}>
                                <h5>Datos Personales</h5>
                                <div className="mb-3">                          
                                    <input type="text" className="form-control" placeholder="Identificacion" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)}/>                          
                                </div>
                                <div className="mb-3">                          
                                    <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>                          
                                </div>
                                <div className="mb-3">                          
                                    <input type="text" className="form-control" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>                          
                                </div>
                                <div className="mb-3">                          
                                    <input type="number" className="form-control" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>                          
                                </div>
                                <div className="mb-3">                          
                                    <input type="mail" className="form-control" placeholder="Email" value={correo} onChange={(e) => setCorreo(e.target.value)}/>                          
                                </div>
                                <h5>Datos de Inicio de Sesion</h5>
                                <div className="mb-3">                          
                                    <input type="text" className="form-control" placeholder="Usuario" value={user} onChange={(e) => setUsuario(e.target.value)}/>                          
                                </div>
                                <div className="mb-3">                          
                                    <input type="password" className="form-control" placeholder="Contraseña" value={pass} onChange={(e) => setPassword(e.target.value)}/>                                    
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

export default Register;