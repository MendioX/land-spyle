import React from "react";

export const Contacto = () =>  {

    return (

<div className="w-50 bg-dark h-100 p-5 d-flex flex-column justify-content-center align-items-center rounded">
<div className="mb-3 w-100  align-content-center ">

<label for="exampleFormControlInput1" className="form-label text-light w-100 text-center ">Escribinos con tu consulta</label>

<label for="exampleFormControlInput1" className="form-label text-light w-100 mt-2">Email</label>

    <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com"></input>

    <label for="exampleFormControlInput1" className="form-label text-light w-100 mt-2">Motivo</label>

    <select class="form-select" aria-label="Default select example">
  <option selected>Quiero una web para mi negocio</option>
  <option value="1">Quiero mejorar un proceso</option>
  <option value="2">Quiero integrar Mercado Pago a mi Sitio</option>
  <option value="3">Otro </option>
  
</select>

</div>
<div className="mb-3 w-100">
<label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>


</div>
<button type="submit" className="btn btn-primary w-50 mt-3">Enviar</button>       
</div>


    
    )
}

export default Contacto;