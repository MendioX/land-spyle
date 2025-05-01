import React from "react";
import "../css/productos.css"
import logo_1 from "../img/desa-colab-checkout.png";
import logo_2 from "../img/desa-colab-wsp.png";
import logo_3 from "../img/desarrollo-colab.png";
import logo_4 from "../img/asesoria-analisis.png";


export const Productos = () => {


    return(
  
      
       
        

    <div  className="d-flex flex-column flex-md-row justify-content-between me-5 ms-5 h-75 align-items-center column-gap-2 row-gap-2" >
    
      <div className="card tarjeta-custom shadow-lg" data-aos="fade-up" >
        <img src={logo_1} className="card-img-top p-1 " alt="..."></img>
          <div class="card-body text-center d-flex flex-column justify-content-between">
              <h5 class="card-title ">Integracion con ventas</h5>
              <p class="card-text"> Trabajamos en checkouts, integraciones de pago, carritos para tus productos y potenciamos tus ventas.</p>
              <a href={`https://wa.me/${process.env.REACT_APP_WSP_NUMBER}?text=Hola! Me interesa consultar por los servicios :)`} target="_blank" className="btn btn-outline-light">Quiero este servicio</a> 
            </div>
          
      </div>


  <div className="card tarjeta-custom shadow-lg" data-aos="fade-up" >
  <img src={logo_2} className="card-img-top p-1" alt="..."></img>
    <div class="card-body text-center d-flex flex-column justify-content-between">
      <h5 class="card-title ">Whathsap Bot</h5>
      <p class="card-text ">Si el flujo principal de tu empresa pasa por Whathsap lo potenciamos con automatizaciones. </p>
      <a href={`https://wa.me/${process.env.REACT_APP_WSP_NUMBER}?text=Hola! Me interesa consultar por los servicios :)`} target="_blank" className="btn btn-outline-light">Quiero este servicio</a> 
    </div>
    
  </div>


  <div className="card tarjeta-custom shadow-lg" data-aos="fade-up" >
  <img src={logo_3} className="card-img-top p-1" alt="..."></img>
    <div class="card-body text-center d-flex flex-column justify-content-between">
      <h5 class="card-title ">Diseños y soluciones a medida</h5>
      <p class="card-text">Necesitas un sistema que se adapte al negocio y potencie los resultados de tus equipos, lo diseñamos por vos. </p>
      <a href={`https://wa.me/${process.env.REACT_APP_WSP_NUMBER}?text=Hola! Me interesa consultar por los servicios  :)`} target="_blank" className="btn btn-outline-light  ">Quiero este servicio</a> 
    </div>
    
  </div>


  
  <div className="card  shadow-lg tarjeta-custom" data-aos="fade-up" >
  <img src={logo_4} className="card-img-top p-1" alt="..."></img>
    <div class="card-body text-center d-flex flex-column justify-content-between">
      <h5 class="card-title ">Asesoría en Sistemas</h5>
      <p class="card-text"> Si tu negocio necesita agilizar procesos y acortar tiempos, nosotros buscamos metodologias para que lleves a la practica. </p>
      <a href={`https://wa.me/${process.env.REACT_APP_WSP_NUMBER}?text=Hola! Me interesa consultar por los servicios :)`} target="_blank" className="btn btn-outline-light">Quiero este servicio</a> 
    </div>
    
  </div>
    
  </div>
 
    )
}

export default Productos;