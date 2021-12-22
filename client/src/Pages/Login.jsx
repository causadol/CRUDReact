import React, { useState } from 'react';
import imgLog from "../assets/imgLog.jpg";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Side from '../Components/Side';
import salert from 'sweetalert';
import axios from 'axios';




const eventoLogin = async(usuario, password) =>{
    try{
        const res = await axios({
            method: 'get',
            url: `http://localhost:5000/api/login?user=${usuario}&pass=${password}`,
            responseType: 'json'        
        });     
        if (res.data.length==0){
            salert("este man no esta registrado");
        }else{
            //salert("bienvenido a Katastronk "+res.data[0].nombre);            
            window.location.href = "/dashboard";            
            console.log(res.data);
        }
        
        
    }catch(error){
        console.log(error);
    }
}
const Login = () => {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(usuario)
        console.log(password)
        eventoLogin(usuario, password);
    };
    
    
    return ( 
        <div className="container">
            <Header />            
            <div className="fondo-titulo-login">
                <h6>Inicio de Sesión</h6>
            </div>
            <br />
            <div className="row">
                <div className="col-md-3">
                    <div className="fondo-login">
                        <h6 className="fondo-titulo-login">Usuario</h6>
                        <div className="fondo-text-login"><p><small>Ingresa con tu usuario asignado o correo electronico</small></p></div>
                        <div className="box-form">
                            <form onSubmit={onSubmitHandler}>
                                <div className="mb-3">                          
                                    <input type="text" className="form-control" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>                          
                                </div>
                                <div className="mb-3">                          
                                    <input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>                        
                                <button type="submit" className="btn btn-warning ">Continuar</button>
                            </form>
                        </div>
                        
                        <p className="text-center"><a href="#" className="text-menu">¿Problemas para conectarte?</a></p>                    
                    </div>
                    <br />
                    <Side />
                </div>
                <div className="col-md-9">
                    <img src={imgLog}/>                
                </div>
            </div>
            <br></br>
            <Footer />
        </div>
    );
}

export default Login;