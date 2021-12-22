import React from 'react';

const Menu = () => {
    return ( 
        <div className="fondo-login">
            <h6 className="fondo-titulo-login">Menu Dashboard</h6>
            <div className="margen-login">
            <p><a href="/dashboard" className="text-menu"><em className="bi bi-house"></em> Home</a></p>
            <p><a href="/predio" className="text-menu"><em className="bi bi-house-fill"></em> Registrar Predio</a></p>
            <p><a href="/registro" className="text-menu"><em className="bi bi-person"></em> Registrar Persona</a></p>
            <p><a href="/listar-personas" className="text-menu"><em className="bi bi bi-search"></em> Consutar Personas</a></p>         
            <p><a href="/login" className="text-menu"><em className="bi bi-x-circle"></em> Cerrar Sesion</a></p>         
            </div>
        </div>
    );
}

export default Menu;