
import "./App.css";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import SwiperCarousel from "./components/SwiperCarousel";
function App() {

  return (
    <div className="App">
      <SwiperCarousel></SwiperCarousel>
      {/* <Swiper
        modules={[Navigation]}
      spaceBetween={50}
        slidesPerView={3}
        navigation
      // pagination={{ clickable: true }}
     
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
        
 
    </Swiper> */}
    {/* <Button label={'single'}></Button> 

      <ButtonGroup>
    <Button label={'First child'} ></Button> 
      </ButtonGroup> */}
      

      {/* <p>React app</p> */}
      {/* <ButtonGroup>
      <Button></Button>

      </ButtonGroup>
       */}
    </div>
  );
}

export default App;
