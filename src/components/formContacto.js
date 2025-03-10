import React from "react";
import { useState } from "react";
import "../css/form.css"
import ReCAPTCHA from "react-google-recaptcha";

export const Contacto = () =>  {


    const [captchaValido, setCaptchaValido] = useState(false);

    const handleRecaptchaChange = (value) => {
        setCaptchaValido(!!value); // Si hay valor, el captcha es válido
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValido) {
            alert("Por favor, verifica que no eres un robot.");
            return;
        }
        alert("Formulario enviado correctamente.");
        // Aquí puedes enviar los datos al backend
    };


    return (

<form onSubmit={handleSubmit} className=" bg-custom h-100 p-3 d-flex flex-column justify-content-center align-items-center rounded color-text-custom form-custom shadow-lg" id="sectionContacto">
<div className="mb-1 w-100  align-content-center ">

<label for="exampleFormControlInput1" className="form-label  w-100 text-center text-uppercase">Escribinos con tu consulta</label>

<label for="exampleFormControlInput1" className="form-label  w-100 mt-1">Email</label>

    <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com"></input>

    <label for="exampleFormControlInput1" className="form-label  w-100 mt-0">Motivo</label>

    <select class="form-select" aria-label="Default select example">
  <option selected>Quiero una asesoría de imagen</option>
  <option value="1">Quiero un análisis de colorimetia</option>
  <option value="2">Quiero un detox de placard / armario capsula</option>
  <option value="3">Otro </option>
  
</select>

</div>
<div className="mb-1 w-100">
<label for="exampleFormControlTextarea1" className="form-label">¿Como podemos ayudarte?</label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>


</div>

 {/* reCAPTCHA */}
 <div className="recaptcha-custom">
        <ReCAPTCHA
                sitekey="6LegfO8qAAAAAIrXd_umECF8b0NBKS-xf8rkktHn"
                onChange={handleRecaptchaChange} 
            />
            </div>

<button type="submit" className="btn btn-outline-light w-50 mt-2 " id="btn-custom-form">Enviar</button>       
</form>


    
    )
}

export default Contacto;