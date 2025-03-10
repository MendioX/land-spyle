
import React from "react"
import "../css/section.css"

export const nosotros = () =>  {

return(
    
    <section className="mySection mySectionHome text-light">

    <div className="col m-2 bg-custom h-75 flex-column justify-content-center d-flex align-items-center p-3 rounded custom-nosotros shadow-lg">
    
            <h2 className="text-light text-center text-uppercase fs-4"> ¿quienes somos?  </h2>
            
               
        
                <p className="text-center ">Neurotica es un proyecto que busca ayudar a mujeres de todas las edades.</p>
        
              
        
    </div>

    <div className="col m-2 bg-custom h-75 flex-column justify-content-center d-flex align-items-center p-3 rounded custom-nosotros shadow-lg ">
        
    <h2 className="text-light text-center text-uppercase fs-4"> ¿Que hacemos?  </h2>
    <p className="text-center align-middle ">Potenciamos tu imagen trabajando sobre tus gustos y lo que te hace sentir segura.</p>
    
    </div> 
    <div className="col m-2 bg-custom h-75 flex-column justify-content-center d-flex align-items-center p-3 rounded custom-nosotros shadow-lg">
        <h2 className="text-light text-center text-uppercase fs-5"> ¿Por qué elegirnos? </h2>
        <p className="text-center">Nos comprometemos con ayudarte a que te sientas segura con tu imagen.</p>
    <div>
    <a href="https://wa.me/1234567890?text=hello+123" target="_blank" className="whatsapp-btn"><i className="bi bi-whatsapp"></i></a>
    
    </div>
    
    </div>



</section>
    

)

}

export default nosotros;