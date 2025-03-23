import React from "react";
import Contacto from "../components/formContacto";

import Productos from "./productos";

import Nosotros from "./infoNosotros";

import "../css/section.css"

export const Sections = () =>  {
    return (

<div>


<Nosotros/>



<section className="mySection flex-column" id="sectionServicios">
<div className="w-75 text-center mb-1 mt-5 "><h2 className=" title-cutom" data-aos="fade-up"> Nuestros Servicios</h2></div>
    <Productos/>    
    
</section>

<section className="mySection aling-flex-custom">

<div className="col  d-flex h-75 flex-column justify-content-center align-items-center w-100">

<Contacto/>

</div>

</section>




</div>
    

    )


}

export default Sections;