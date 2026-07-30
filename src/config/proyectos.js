import imgProyecto1 from "../img/linkseasy.png";
import imgProyecto2 from "../img/dolareasy.png";
import imgProyecto3 from "../img/darong.png";
// import imgProyecto4 from "../img/web-dev.png";

// Agregá o editá proyectos acá: cada objeto es una tarjeta del slider.
const proyectos = [
  {
    id: 1,
     titulo: "DolarEasy",
    descripcion: "Integramos APIS de cotizaciones de USD del mercado en tiempo real, junto con APIs de BCRA con datos oficiales de la economia Argentina.",
    imagen: imgProyecto2,
    url: "https://spyle.com.ar/dolar-easy/",
    
  },
  {
    id: 2,
   
    titulo: "LinksEasy",
    descripcion: "LinksEasy te permite tener un perfil público  gratis y personalizado, con contabilidad de clicks y diseño amigable. Podes registrarte gratis ahora y tener un perfil para compartir URLs de proyectos y redes sociales con tu comunidad.",
    imagen: imgProyecto1,
    url: "https://linkseasy.com.ar/",
  },
  {
    id: 3,
    titulo: "DAR ONG (proximamente)",
    descripcion: "DAR es una ONG dedicada a la promocion de donacion de sangre, con una landing y sistema que permite gestionar campañas, registrar donantes y tener un seguimiento de ellos.",
    imagen: imgProyecto3,
    url: "https://spyle.com.ar/",
  },
  // {
  //   id: 4,
  //   titulo: "Desarrollo a medida",
  //   descripcion: "Sistema web adaptado a las necesidades específicas del equipo.",
  //   imagen: imgProyecto4,
  //   url: "https://ejemplo.com/proyecto-4",
  // },
];

export default proyectos;
