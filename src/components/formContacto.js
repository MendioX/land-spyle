import React from "react";
import { useState } from "react";
import "../css/form.css"
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

export const Contacto = () =>  {



    const [formData, setFormData] = useState({
        toClient:  process.env.REACT_APP_EMAIL_USER,
        email: "",
        motivo: "Quiero una asesoría de imagen",
        mensaje: "",
      });
    
      const [recaptchaValue, setRecaptchaValue] = useState(null);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!recaptchaValue) {
        //   alert("Por favor, verifica que no eres un robot.");
          showAlert (false , "Por favor, verifica que no eres un robot." ,"Cuidado" )
          return;
        }
    
        try {
          const response = await fetch("http://localhost:5000/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            
            showAlert (true , "Un asesor se contactará contigo.", "Correo enviado")
            setFormData({ toClient:  process.env.REACT_APP_EMAIL_USER, email: "", motivo: "Quiero una asesoría de imagen", mensaje: "" });
          } else {
            alert("Error al enviar el correo: " + data.error);
          }
        } catch (error) {
          console.error("Error en la solicitud:", error);
          showAlert (false , "No pudimos enviar tu correo.", "Algo salio mal")
        
        }
      };
    

      const showAlert = ( value , msj , title ) => {

        if(value){
            Swal.fire({
            
                title: title,
                text: msj,
                icon: "success",
                confirmButtonText: "OK",
              });

        }else if (value === false){

            Swal.fire({
            
                title: title,
                text: msj,
                icon: "warning",
                confirmButtonText: "OK",
              });
        }
       
      };

    return (

<form onSubmit={handleSubmit} className=" bg-custom h-100 p-3 d-flex flex-column justify-content-center align-items-center rounded color-text-custom form-custom shadow-lg" id="sectionContacto">
<div className="mb-1 w-100  align-content-center ">

<label for="exampleFormControlInput1" className="form-label  w-100 text-center text-uppercase">Escribinos con tu consulta</label>

<label for="exampleFormControlInput1" className="form-label  w-100 mt-1">Email</label>

    <input
     type="email"
     className="form-control"
     id="email"
     name="email"
     placeholder="name@example.com"
     value={formData.email}
     onChange={handleChange}
     required>
     </input>

    <label for="exampleFormControlInput1" className="form-label  w-100 mt-0">Motivo</label>

    <select 
      className="form-select"
      id="motivo"
      name="motivo"
      value={formData.motivo}
      onChange={handleChange}>
  <option selected>Quiero una asesoría de imagen</option>
  <option value="Quiero un análisis de colorimetia">Quiero un análisis de colorimetia</option>
  <option value="Quiero un detox de placard / armario capsula">Quiero un detox de placard / armario capsula</option>
  <option value="Otro">Otro</option>
  
</select>

</div>
<div className="mb-1 w-100">
<label for="exampleFormControlTextarea1" className="form-label">¿Como podemos ayudarte?</label>

<textarea  
          className="form-control"
          id="mensaje"
          name="mensaje"
          rows="3"
          value={formData.mensaje}
          onChange={handleChange}
          required>
          </textarea>


</div>

 {/* reCAPTCHA */}
 <div className="recaptcha-custom">
        <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                onChange={handleRecaptchaChange} 
            />
            </div>

<button type="submit" className="btn btn-outline-light w-50 mt-2 " id="btn-custom-form">Enviar</button>       
</form>


    
    )
}

export default Contacto;