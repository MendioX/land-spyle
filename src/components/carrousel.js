import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "../css/carrousel.css"
import imgCarrousel_1 from "../img/hero-portada-9.png"
import imgCarrousel_2 from "../img/hero-portada-8.png"
import imgCarrousel_3 from "../img/hero-portada-7.png"
function Carrousel() {
  return (
    <Carousel className=' h-50 bg-secondary ' id='sectionCarrousel' >
      <Carousel.Item interval={5000} >
        
          {/* <img src={imgCarrousel} className="d-block "></img> */}
          <div className='carousel-caption-custom'
              style={{ backgroundImage: `url(${imgCarrousel_1})`}}>
          <h2 className='fs-1 text-uppercase' id='titleMain'>N E U R O T I C A</h2>
          <p className='fs-3 font-weight-light' id='subtitle'>it girl</p>
          </div>

      </Carousel.Item>
      <Carousel.Item interval={5000}>


      <div className='carousel-caption-custom'
      style={{ backgroundImage: `url(${imgCarrousel_2})` }}>
          <h2 className='fs-1 text-uppercase'>Estilo para tu guardarropas</h2>
          <p></p>
          </div>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
      <div className='carousel-caption-custom img-filter-custom'
       style={{ backgroundImage: `url(${imgCarrousel_3})`}}>
          <h2 className='fs-1 text-uppercase'>La imagen sos vos</h2>
          <p></p>
          </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;