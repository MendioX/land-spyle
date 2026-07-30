import React from "react";
import { useState } from "react";
import "../css/form.css"
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

export const Contacto = () =>  {



    const [formData, setFormData] = useState({
        toClient:  process.env.REACT_APP_EMAIL_USER,
        email: "",
        motivo: "Quiero un servicio de Spyle",
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
          toast.error("Por favor, verifica que no eres un robot.");
          return;
        }

        try {
          const response = await fetch(process.env.REACT_APP_BACKEND_URL+"/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          const data = await response.json();

          if (response.ok) {

            toast.success("Un asesor se contactará contigo.");
            setFormData({ toClient:  process.env.REACT_APP_EMAIL_USER, email: "", motivo: "Quiero una asesoría de imagen", mensaje: "" });
          } else {
            toast.error("Error al enviar el correo: " + data.error);
          }
        } catch (error) {
          console.error("Error en la solicitud:", error);
          toast.error("No pudimos enviar tu correo.");

        }
      };

    return (

<form onSubmit={handleSubmit} className="bg-custom color-text-custom form-custom shadow-lg" id="sectionContacto" data-aos="fade-up">

    <div className="form-header text-center mb-4">
        <span className="form-header-icon"><i className="bi bi-chat-dots"></i></span>
        <h2 className="form-title">Escribinos con tu consulta</h2>
        <p className="form-subtitle">Contanos que necesitás y te respondemos a la brevedad.</p>
    </div>

    <div className="row g-3 w-100">

        <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label"><i className="bi bi-envelope me-1"></i>Email</label>
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
        </div>

        <div className="col-12 col-md-6">
            <label htmlFor="motivo" className="form-label"><i className="bi bi-list-task me-1"></i>Motivo</label>
            <select
              className="form-select"
              id="motivo"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}>
          <option selected>Quiero una asesoramiento para mi sitio.</option>
          <option value="Quiero un análisis de colorimetia">Quiero una landing.</option>
          <option value="Quiero un detox de placard / armario capsula">Quiero diseñar un sistema para mi empresa.</option>
          <option value="Otro">Otro</option>
        </select>
        </div>

        <div className="col-12">
            <label htmlFor="mensaje" className="form-label"><i className="bi bi-pencil me-1"></i>¿Como podemos ayudarte?</label>
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

    </div>

 {/* reCAPTCHA */}
 <div className="recaptcha-custom">
        <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                onChange={handleRecaptchaChange}
            />
            </div>

<button type="submit" className="btn btn-servicio w-50 mt-2 d-flex align-items-center justify-content-center gap-2" id="btn-custom-form">
    Enviar <i className="bi bi-send"></i>
</button>
</form>



    )
}

export default Contacto;
