import React from 'react';

const Footer = () => {
    return ( 
        <div>
            <div className="container fondo-pie">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2 text-center">
                        <h3><em className="bi bi-geo-alt"></em></h3>
                        <p><small>Puntos de atención</small><br /><a href="#" className="text-menu">Visítanos</a></p>
                    </div>
                    <div className="col-md-2 text-center">
                        <h3><em className="bi bi-chat-dots"></em></h3>
                        <p><small>Chat en línea</small><br /><a href="#" className="text-menu">Escríbenos</a></p>
                    </div>
                    <div className="col-md-2 text-center">
                        <h3><em className="bi bi-telephone"></em></h3>
                        <p><small>Llámanos a nuestra línea</small><br /><a href="#" className="text-menu">018000 91 0090</a></p>
                    </div>
                    <div className="col-md-2 text-center">
                        <h3><em className="bi bi-phone"></em></h3>
                        <p><small>Prefieres que te llamemos</small><br /><a href="#" className="text-menu">Cuando quieras</a></p>
                    </div>
                    <div className="col-md-2 text-center">
                        <h3><em className="bi bi-volume-up"></em></h3>
                        <p><small>Contáctanos por redes sociales</small><br />
                            <a href="#" className="text-menu"><em className="bi bi-facebook"> </em></a>
                            <a href="#" className="text-menu"><em className="bi bi-instagram"> </em></a>
                            <a href="#" className="text-menu"><em className="bi bi-whatsapp"></em></a>
                        </p>
                    </div>
                <div className="col-md-1"></div>
            </div>

            </div>
            <br />
            <div className="pie-pagina">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h6><strong>Personas</strong></h6>
                            <ul className="text-pie">
                                <li>Catastro</li>
                                <li>Beneficios</li>
                                <li>Impuestos</li>
                                <li>Convenio</li>
                                <li>Pagos</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6><strong>Te puede interesar</strong></h6>
                            <ul className="text-pie">
                                <li>Educacion financiera</li>
                                <li>Servicios Catastrales</li>
                                <li>El valor catastral</li>
                                <li>Condiciones de uso</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6><strong>Katastronk</strong></h6>
                            <ul className="text-pie">
                                <li>Accesibilidad</li>
                                <li>Mapa del sitio</li>
                                <li>Preguntas frecuentes</li>
                                <li>Soporte Jurídico</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6><strong>Contactanos</strong></h6>
                            <p className="text-pie">
                                Km 5, antigua Vía a Puerto Colombia Barranquilla, Atlántico, Colombia<br />
                                Tel. (5) 3509509<br />                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;