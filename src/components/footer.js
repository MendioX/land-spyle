import React from "react";

import "../css/footer.css"



export const MyFooter = () =>  {
    return (

        <footer className="page-footer font-small blue pt-4 bg-dark text-light">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-8 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Spyle</h5>
                    <div className="row">
                        <p> Somos una empresa que se dedica con pasion al desarrollo e implementacion de soluciones tecnologicas, el stack es a medida al igual que las soluciones para nuestros clientes.</p>
                    </div>
                </div>
    
                <hr className="clearfix w-100 d-md-none pb-0"/>
    
                {/* <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div> */}
    
                <div className="col-md-4 mb-md-0 mb-3 link-redes">
                    <h5 className="text-uppercase">Redes</h5>

                    <ul className="list-unstyled ">
                        
                        <li><a href="#!"><i class="fa-brands fa-square-facebook"></i></a></li>
                        <li><a href="#!"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#!"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="#!"><i class="fa-solid fa-envelope"></i> </a></li>
                    </ul>

                </div>
            </div>
        </div>
    
        <div className="footer-copyright text-center py-3">© 2024 Copyright - Todos los derechos reservados por spyle
            <a href="https://mdbootstrap.com/"></a>
        </div>
    
    </footer>
    )}

    export default MyFooter;
