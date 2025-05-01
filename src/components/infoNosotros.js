
import React from "react"
import "../css/section.css"



export const nosotros = () =>  {
    
return(
   
    <section className="mySection mySectionHome text-light"  >

    <div  className="col m-2 bg-custom h-75 flex-column justify-content-center d-flex align-items-center p-3 rounded custom-nosotros shadow-lg">
    
        <h2 className="text-light text-center text-uppercase fs-4"> ¿quienes somos?  </h2>
        <p className="text-center ">Somos apasionados por la tecnología, al servicio de tu necesidad.</p>     
    </div>

    <div  className="col m-2 bg-custom h-75 flex-column justify-content-center d-flex align-items-center p-3 rounded custom-nosotros shadow-lg ">
        <h2 className="text-light text-center text-uppercase fs-4"> ¿Que hacemos?  </h2>
        <p className="text-center align-middle ">Brindamos soluciones tecnológicas para que vos y tu negocio sigan creciendo.</p>
    </div> 
    
    <div   className="col m-2 bg-custom h-75 flex-column justify-content-center d-flex align-items-center p-3 rounded custom-nosotros shadow-lg">
        <h2 className="text-light text-center text-uppercase fs-5"> ¿Por qué elegirnos? </h2>
        <p className="text-center">Tenemos compromiso y estamos abiertos a los cambios tecnológicos.</p>
    <div>

    <a href={`https://wa.me/${process.env.REACT_APP_WSP_NUMBER}?text=Me interesa saber mas sobre el servicio de asesoria ! :)`} target="_blank" className="whatsapp-btn" ><i className="bi bi-whatsapp"></i></a>
   
    
    </div>
    
    
    </div>
    

</section>
    

)

}

export default nosotros;