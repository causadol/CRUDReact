import React from 'react';
import area from "../assets/area.jpg";
import logo from "../assets/logo.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Footer from '../Components/Footer';
import {Link} from "react-router-dom";


const HomePage = () => {
    return ( 
        <body>
        {/* <!--Cabecera--> */}
        <div className="menu">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src={logo} />
                </div>
                <div className="col-md-6">
                    {/*<!--menu--> */}
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link  text-menu" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-menu" href="#">Tramites</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-menu" href="#">Impuestos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-menu">Economia y Finanzas</a>
                        </li>
                    </ul>                
                </div>
                <div className="col-md-4">
                    <Link to = "/login" className="btn btn-outline-dark">
                        Ingresar
                    </Link>                   
                </div>               

            </div>
        </div>
        <br /><br />
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h5>Paga Puntual y Gana Descuentos</h5>
                    <h1>INSCRIPCIÓN DE PREDIOS Y AVISOS CATASTRALES</h1>
                    <p>Pago que todo propietario, poseedor o quien disfrute del bien ajeno debe realizar sobre los bienes inmuebles o predios ubicados en la respectiva jurisdicción del municipio o Distrito</p>
                    <a href="" className="btn btn-warning">Conoce Como</a>
                </div>
                <div className="col-md-7">
                    <img src={area} alt="" />
                </div>
            </div>
        </div>
        <br /><br />
        {/*<!--Iconos -->*/}
        <div className="container">
            <div className="card">
                <div className="card-body">
                
            <div className="row">
                <div className="col-md-3 text-center">
                    <h1 ><em className="bi bi-person-check"></em></h1>
                    <h5>Estoy Registrado</h5>
                </div>
                <div className="col-md-3 text-center">
                    <h1><em className="bi bi-person-x"></em></h1>
                    <h5>No Estoy Registrado</h5>
                </div>
                <div className="col-md-3 text-center">
                    <h1><em className="bi bi-clipboard-check"></em></h1>
                    <h5>Mi Factura</h5>
                </div>
                <div className="col-md-3 text-center">
                    <h1><em className="bi bi-currency-dollar"></em></h1>
                    <h5>Pagar a Cuotas</h5>
                </div>
            </div>
            
                </div>
            </div>
        </div>
        <br />
        <div className="container">
            <h3>Pensando en ti te recomendamos</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="card" >
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Base gravable para predios sin avalúo catastral</h5>
                            <p className="card-text">La base gravable mínima que regirá para el año 2021, conforme a lo dispuesto en la Resolución SDH-000597 del 30 de diciembre de 2020, será la de los valores por metro cuadrado contenidos en la siguiente tabla</p>
                            <a href="#" className="btn btn-outline-dark">Conoce más...</a>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cómo se calcula el impuesto Predial</h5>
                            <p className="card-text">Para liquidar el impuesto predial, se deben tener en cuenta paso a paso los siguientes elementos.</p>
                            <a href="#" className="btn btn-outline-dark">Conoce más...</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">QUIERO PAGAR POR CUOTAS </h5>
                            <p className="card-text">Acogete al pago por cuotas del predial 2021, presenta tu declaración antes de diciembre.</p>
                            <a href="#" className="btn  btn-outline-dark">Conoce más...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!--Pie de Pagina--> */}
        <br /><br />
        <Footer />        
    </div>
    </body>
    );
}

export default HomePage;