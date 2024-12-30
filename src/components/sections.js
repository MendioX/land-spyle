import React from "react";
import Contacto from "../components/formContacto";

import Productos from "./productos";

import "../css/section.css"

export const Sections = () =>  {
    return (

<div>

<section className="mySection mySectionHome ">

<div className="col m-2 bg-dark h-75 flex-column justify-content-center align-items-center p-3">

        <h2 className="text-light text-center"> Mision  <i class="fa-solid fa-flag"></i></h2>
        
        <div >



        </div> 

</div>
<div className="col m-2 bg-dark h-75 p-3">
    
<h2 className="text-light text-center"> Vision <i class="fa-solid fa-pencil"></i> </h2>

</div>
<div className="col m-2 bg-dark h-75 p-3">
<h2 className="text-light text-center"> Objetivo <i class="fa-solid fa-list"></i></h2>

</div>

</section>

<section className="mySection">

    <Productos/>    
    
</section>

<section className="mySection ">

<div className="col m-2 d-flex h-75 flex-column justify-content-center align-items-center">

<Contacto/>

</div>

</section>




</div>
    

    )


}

export default Sections;