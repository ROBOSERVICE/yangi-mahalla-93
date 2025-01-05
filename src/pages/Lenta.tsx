import img1 from "../assets/firstPageSlides/1.png";
import img2 from '../assets/firstPageSlides/2.png';
import img3 from '../assets/firstPageSlides/3.png';
import img4 from '../assets/firstPageSlides/4.png';
import img5 from '../assets/firstPageSlides/5.png';
import img6 from '../assets/firstPageSlides/6.png';
import img7 from '../assets/firstPageSlides/7.png';
import img8 from '../assets/firstPageSlides/8.png';
import img9 from '../assets/firstPageSlides/9.png';
import img10 from '../assets/firstPageSlides/10.png';
import img12 from '../assets/firstPageSlides/12.png';
import img13 from '../assets/firstPageSlides/13.png';
import img14 from '../assets/firstPageSlides/14.png';
// import img15 from '../assets/firstPageSlides/15.png';
import img16 from '../assets/firstPageSlides/16.png';
import img17 from '../assets/firstPageSlides/17.png';
import img18 from '../assets/firstPageSlides/18.png';
import img19 from '../assets/firstPageSlides/19.png';
import img20 from '../assets/firstPageSlides/20.png';
const Lenta = () => {
   const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
    
      img12,
      img16
      ,
      img14,
      // img15,
      img13,
      img17,
      img18,
      img19,
      img20,
   ];
   return (
      <div className="flex-wrap flex gap-[10px] w-[50%] mx-auto mt-[25%]">
         {images.map((image, index) => (
            <img
               key={index}
               src={image}
               className="w-[100px] h-[100px]"
               alt="slide"
            />
         ))}
      </div>
   );
};

export default Lenta;
