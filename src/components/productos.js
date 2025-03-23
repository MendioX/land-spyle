import React from "react";
import "../css/productos.css"
import logo_1 from "../img/asesora-img.png";
import logo_2 from "../img/colorimetria.png";
import logo_3 from "../img/diagnostico-silueta.png";
import logo_4 from "../img/asesora-guardarropa.png";


export const Productos = () => {


    return(
  
      
       
        

    <div  className="d-flex flex-column flex-md-row justify-content-between me-5 ms-5 h-75 align-items-center column-gap-2 row-gap-2" >
    
      <div className="card tarjeta-custom shadow-lg" data-aos="fade-up" >
        <img src={logo_1} className="card-img-top p-1 " alt="..."></img>
          <div class="card-body text-center d-flex flex-column justify-content-between">
              <h5 class="card-title ">Asesoria de imgen</h5>
              <p class="card-text">Trabajamos sobre tu estilo, lo que te gusta y a donde queres llegar. Combinaciones, placard, aceesorios, colorimetria.</p>
              <a href={`https://wa.me/${process.env.REACT_APP_WSP_NUMBER}?text=Hola! Me interesa el servicio de Asesoria de imgen :)`} target="_blank" className="btn btn-outline-light">Quiero este servicio</a> 
            </div>
          
      </div>


  <div className="card tarjeta-custom shadow-lg" data-aos="fade-up" >
  <img src={logo_2} className="card-img-top p-1" alt="..."></img>
    <div class="card-body text-center d-flex flex-column justify-content-between">
      <h5 class="card-title ">Analisis de Colorimetria</h5>
      <p class="card-text ">Determinación de colores que favorecen tu tono de piel. Paleta personalizada con colores ideales.      </p>
      <a href={`https://wa.me/${process.env.REACT_APP_WSP_NUMBER}?text=Hola! Me interesa el servicio de Analisis de Colorimetria :)`} target="_blank" className="btn btn-outline-light">Quiero este servicio</a> 
    </div>
    
  </div>


  <div className="card tarjeta-custom shadow-lg" data-aos="fade-up" >
  <img src={logo_3} className="card-img-top p-1" alt="..."></img>
    <div class="card-body text-center d-flex flex-column justify-content-between">
      <h5 class="card-title ">Diagnóstico de silueta y visagismo</h5>
      <p class="card-text">Recomendaciones de prendas, cortes ideales y tips de estilo. </p>
      <a href={`https://wa.me/${process.env.REACT_APP_WSP_NUMBER}?text=Hola! Me interesa el servicio de Diagnóstico de silueta y visagismo :)`} target="_blank" className="btn btn-outline-light  ">Quiero este servicio</a> 
    </div>
    
  </div>


  
  <div className="card  shadow-lg tarjeta-custom" data-aos="fade-up" >
  <img src={logo_4} className="card-img-top p-1" alt="..."></img>
    <div class="card-body text-center d-flex flex-column justify-content-between">
      <h5 class="card-title ">Asesoría en Guardarropa</h5>
      <p class="card-text">Trabajamos sobre tu placard y lo potenciamos.<br></br> Armado de outfits, detox de placard.    </p>
      <a href={`https://wa.me/${process.env.REACT_APP_WSP_NUMBER}?text=Hola! Me interesa el servicio de Asesoría en Guardarropa :)`} target="_blank" className="btn btn-outline-light">Quiero este servicio</a> 
    </div>
    
  </div>
    
  </div>
 
    )
}

export default Productos;