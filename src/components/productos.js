import React from "react";
import "../css/productos.css"
import mplogo from "../img/mp-logo.png";
import wsplogo from "../img/wsp-icon.png";
import weblogo from "../img/web-dev.png";


export const Productos = () => {


  const cards = [
    { 
      title: "Card 1", 
      text: "Contenido corto.", 
      img: mplogo 
    },
    { 
      title: "Card 2", 
      text: "Este es un contenido un poco más largo que el anterior.", 
      img: wsplogo 
    },
    { 
      title: "Card 3", 
      text: "Contenido bastante largo que ocupa más espacio y hará que todas las tarjetas sean del mismo tamaño.", 
      img: weblogo
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4">
            <div className="card d-flex flex-column h-100">
              {/* Imagen con tamaño fijo y ajuste */}
              <img 
                src={card.img} 
                alt={card.title} 
                className="card-img-top img-fluid" 
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text flex-grow-1">{card.text}</p>
                <button className="btn btn-primary mt-auto">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  //   return(
  
       
  //   <div  className="d-flex flex-row justify-content-between me-5  ms-5 h-100 align-items-center">
    
  //     <div className="card tarjeta-custom"  >
  //       <img src={mplogo} className="card-img-top p-5 h-25" alt="..."></img>
  //         <div class="card-body ">
  //             <h5 class="card-title">Checkout MercadoPago</h5>
  //             <p class="card-text">Integramos a tu producto un checkout de MercadoPago, link de donaciones, pasarela de pago o carrito de compas.</p>
  //             {/* <a href="#" className="btn btn-primary">Contactanos</a> */}
  //           </div>
          
  //     </div>


  // <div className="card tarjeta-custom"  >
  // <img src={wsplogo} className="card-img-top p-5" alt="..."></img>
  //   <div class="card-body">
  //     <h5 class="card-title">Bot de whatsapp</h5>
  //     <p class="card-text">Adaptamos el bot a la medida de tu negocio, respuestas que resuelven las inquietudes de tus clientes.</p>
  //     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  //   </div>
    
  // </div>


  // <div className="card tarjeta-custom"  >
  // <img src={weblogo} className="card-img-top p-3" alt="..."></img>
  //   <div class="card-body">
  //     <h5 class="card-title">Preparamos Tu Web</h5>
  //     <p class="card-text">Diseño a tu medida, con los requerimiento que se adapten a lasnecesidades de tu negocio.</p>
  //     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  //   </div>
    
  // </div>
    
  // </div>

  //   )
}

export default Productos;