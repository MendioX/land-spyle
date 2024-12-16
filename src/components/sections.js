import React from "react";
import Contacto from "../components/formContacto";

import "../css/section.css"

export const Sections = () =>  {
    return (

<div>

<section className="mySection mySectionHome ">

<div className="col m-2 bg-dark h-75 flex-column justify-content-center align-items-center">

        <h2 className="text-light text-center"> Mision</h2>
        <div >



        </div> 

</div>
<div className="col m-2 bg-dark h-75">
<h2 className="text-light text-center"> Vision </h2>

</div>
<div className="col m-2 bg-dark h-75">
<h2 className="text-light text-center"> Objetivo</h2>

</div>

</section>

<section className="mySection ">

<div className="col m-2 d-flex h-75 flex-column justify-content-center align-items-center">

<Contacto/>

</div>

</section>



<section className="mySection">
<h2> Tres</h2>


</section>
</div>
    

    )


}

export default Sections;