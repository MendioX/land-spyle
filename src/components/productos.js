import React from "react";
import "../css/productos.css"
import mplogo from "../img/mp-logo.png";



export const Productos = () => {

    return(
  
       
    <div  className="d-flex flex-row justify-content-between me-5  ms-5 h-100 align-items-center">
    <div className="card tarjeta-custom"  >
    <img src={mplogo} className="card-img-top p-5" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Checkout MercadoPago</h5>
      <p class="card-text">Integramos a tu producto un checkout de MercadoPago, link de donaciones, pasarela de pago o carrito de compas.</p>
      {/* <a href="#" className="btn btn-primary">Contactanos</a> */}
    </div>
    
  </div>


  <div className="card tarjeta-custom"  >
  <img src={mplogo} className="card-img-top p-5" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
    
  </div>


  <div className="card tarjeta-custom"  >
  <img src={mplogo} className="card-img-top p-5" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
    
  </div>
    
  </div>

    )
}

export default Productos;