import React from "react";
import "../css/productos.css"
import logo_1 from "../img/asesora-img.png";
import logo_2 from "../img/colorimetria.png";
import logo_3 from "../img/diagnostico-silueta.png";
import logo_4 from "../img/asesora-guardarropa.png";


export const Productos = () => {


    return(
  
       
    <div  className="d-flex flex-column flex-md-row justify-content-between me-5 ms-5 h-75 align-items-center column-gap-2 row-gap-2" >
    
      <div className="card tarjeta-custom"  >
        <img src={logo_1} className="card-img-top p-1 " alt="..."></img>
          <div class="card-body ">
              <h5 class="card-title text-center">Asesoria de imgen</h5>
              <p class="card-text">Integramos a tu producto un checkout de MercadoPago, link de donaciones, pasarela de pago o carrito de compas.</p>
              {/* <a href="#" className="btn btn-primary">Contactanos</a> */}
            </div>
          
      </div>


  <div className="card tarjeta-custom"  >
  <img src={logo_2} className="card-img-top p-1" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title text-center">Analisis de Colorimetria</h5>
      <p class="card-text ">Determinación de colores que favorecen tu tono de piel. Paleta personalizada con colores ideales.      </p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
    
  </div>


  <div className="card tarjeta-custom"  >
  <img src={logo_3} className="card-img-top p-1" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title text-center">Diagnóstico de silueta y visagismo</h5>
      <p class="card-text">Recomendaciones de prendas, cortes ideales y tips de estilo. </p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
    
  </div>


  
  <div className="card tarjeta-custom"  >
  <img src={logo_4} className="card-img-top p-1" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title text-center">Asesoría en Guardarropa</h5>
      <p class="card-text">Detox de placard. Armado de outfits.      </p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
    
  </div>
    
  </div>

    )
}

export default Productos;