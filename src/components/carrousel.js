import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "../css/carrousel.css"

function Carrousel() {
  return (
    <Carousel className=' h-50 bg-secondary' >
      <Carousel.Item interval={1000000}>
        
        
          <div className='carousel-caption-custom'>
          <h2 className='fs-1'>S P Y L E</h2>
          <p>Soluciones para potenciar tus proyectos</p>
          </div>
        
        
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='carousel-caption-custom'>
          <h3>Potenciamos tu negocio</h3>
          <p>Te posicionamos en internet con un sitio a tu medida</p>
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-caption-custom'>
          <h3>Metricas para tus ventas y tus redes</h3>
          <p>Customizamos tu checkout de ventas y generamos un panel para medir tus redes.</p>
          </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;