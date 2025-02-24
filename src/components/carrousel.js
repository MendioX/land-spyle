import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "../css/carrousel.css"
import imgCarrousel_1 from "../img/hero-portada-4.png"
import imgCarrousel_2 from "../img/hero-portada-2.png"
import imgCarrousel_3 from "../img/hero-portada-3.png"
function Carrousel() {
  return (
    <Carousel className=' h-50 bg-secondary' >
      <Carousel.Item interval={1000000} >
        
          {/* <img src={imgCarrousel} className="d-block "></img> */}
          <div className='carousel-caption-custom'
              style={{ backgroundImage: `url(${imgCarrousel_1})` }}>
          <h2 className='fs-1 text-light'>S P Y L E</h2>
          <p>Soluciones para potenciar tus proyectos</p>
          </div>

      </Carousel.Item>
      <Carousel.Item interval={500}>


      <div className='carousel-caption-custom'
      style={{ backgroundImage: `url(${imgCarrousel_2})` }}>
          <h2 className='fs-1 text-light'>Potenciamos tu negocio</h2>
          <p>Te posicionamos en internet con un sitio a tu medida</p>
          </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='carousel-caption-custom'
      style={{ backgroundImage: `url(${imgCarrousel_3})` }}>
          <h2 className='fs-1 text-light'>Metricas para tus ventas y tus redes</h2>
          <p>Customizamos tu checkout de ventas y generamos un panel para medir tus redes.</p>
          </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;