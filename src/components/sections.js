import React from "react";
import Contacto from "../components/formContacto";

import Productos from "./productos";

import Nosotros from "./infoNosotros";

import "../css/section.css"

export const Sections = () =>  {
    return (

<div>


<Nosotros/>



<section className="mySection " id="sectionProductos">

    <Productos/>    
    
</section>

<section className="mySection aling-flex-custom">

<div className="col m-2 d-flex h-75 flex-column justify-content-center align-items-center w-100">

<Contacto/>

</div>

</section>




</div>
    

    )


}

export default Sections;