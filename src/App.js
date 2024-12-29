
import "./App.css";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import List from "./components/List";
// import ShapeTwo from "./components/ShapeTwo";
import ShapOne from "./components/ShapOne";
import ShapeTwo from "./components/ShapeTwo";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/components/navigation/navigation.min.css';
// import SwiperCore, { Navigation } from 'swiper';
function App() {
//   const calBackFun = (e)=>{
//     console.log(e)
// }
// const userData = [{
//   id:1,
//   name:'Mahmoud',
//   email:'Mahmoud@gmai.com',
//   age:30
// },{
//   id:2,
//   name:'Hadeer',
//   email:'Hadeer@gmai.com',
//   age:30
// },{
//   id:3,
//   name:'Celia',
//   email:'Celia@gmai.com',
//   age:6
// },{
//   id:4,
//   name:'Ahmed',
//   email:'Ahmed@gmai.com',
//   age:3
// }]
// const data = [
//   {
//     componentName:ShapOne,
//     data:{
//       id:1,
//       name:'Mahmoud',
//       email:'Mahmoud@gmai.com',
//       age:35
//     }
//   },
//   {
//     componentName:ShapeTwo,
//     data:{
//       id:2,
//       name:'Hadeer',
//       email:'Hadeer@gmai.com',
//       age:30
//     }
//   }
// ]
// const child = data.map((el) => {
//   const Component = el.componentName; // Rename to 'Component'
//   return <Component item={el.data} key={el.data.id} />; // Use 'Component' in JSX
// });
  return (
    <div className="App">
       <Swiper
      spaceBetween={50}
      slidesPerView={3}
     
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
  
    </Swiper>
      
      
    </div>
  );
}

export default App;
