import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "../css/carrousel.css"
import imgCarrousel_1 from "../img/hero-spyle-1.png"
import imgCarrousel_2 from "../img/hero-spyle-2.png"
import imgCarrousel_3 from "../img/hero-spyle-1.png"
function Carrousel() {
  return (
    <Carousel className=' h-50 bg-secondary ' id='sectionCarrousel' >
      <Carousel.Item interval={5000} >
        
          {/* <img src={imgCarrousel} className="d-block "></img> */}
          <div className='carousel-caption-custom'
              style={{ backgroundImage: `url(${imgCarrousel_1})`}}>
          <h2 className='fs-1 text-uppercase' id='titleMain'>{`</ S P Y L E >`}</h2>
          <p className='fs-3 font-weight-light' id='subtitle'>Easy Solutions</p>
          </div>

      </Carousel.Item>
      <Carousel.Item interval={5000}>


      <div className='carousel-caption-custom'
      style={{ backgroundImage: `url(${imgCarrousel_2})` }}>
          <h2 className='fs-1 text-uppercase'>Optimización para tu negocio</h2>
          <p></p>
          </div>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
      <div className='carousel-caption-custom img-filter-custom'
       style={{ backgroundImage: `url(${imgCarrousel_3})`}}>
          <h2 className='fs-1 text-uppercase'>Soluciones a tu medida</h2>
          <p></p>
          </div>
      </Carousel.Item>
      
    </Carousel>
    
  );
}

export default Carrousel;