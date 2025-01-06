
// import { useState } from 'react';
// import background from '../assets/Appartments/back.png';
// import { Button } from 'antd';
// import { FaRegLightbulb,FaLightbulb} from "react-icons/fa";


// const SelectionOfApartments = () => {
//    const [currentApertment,setCurrentApertment] = useState(0)
//    const [light,setLight]=useState(false)
//    const getCurrentImage=()=>{return""}
//    return (
//       <div className=" select-none  puff-in-center relative min-w-[1820px] min-h-[1080px] w-full h-full ">
//     <div className='absolute z-[50] p-4'> 
//       <Button type="primary" shape='circle'  size='large' icon={light?<FaRegLightbulb />:<FaLightbulb />} onClick={()=>{setLight(!light)}}></Button>
//     </div>
     
//          <img
//             src={background}
//             alt=""
//             className=" select-none w-full h-full min-h-[1080px] min-w-[1820px] object-cover absolute z-40 "
//          />
//          {currentApertment === 0 ? (
//             <>
         
//             </>
//          ) : (
//             <img
//                src={getCurrentImage()}
//                alt=""
//                className=" select-none w-full h-full min-h-[1080px] min-w-[1820px] object-cover absolute z-40 fade-in-out"
//             />
//          )}
//       </div>
//    );
// };

// export default SelectionOfApartments;

import { useState } from 'react';
import background from '../assets/Appartments/back.png';
import { Button } from 'antd';
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router';

const blockCoordinates:{id:number,cord:{top?:string,left?:string,bottom?:string,right?:string,transform?:string},customStyle?:string}[] = [
   { id: 1, cord: { top: "130px", left: "630px",  transform:"SkewY(-10deg) rotate(-5deg)"}, customStyle: " w-[45px] h-[80px]" },
   { id: 2, cord: { top: "150px", left: "580px",  transform:"SkewY(-10deg) rotate(-5deg)"}, customStyle: " w-[45px] h-[50px]" },
   { id: 3, cord: { top: "160px", left: "540px",  transform:"SkewY(-10deg) rotate(-5deg)"}, customStyle: " w-[35px] h-[80px]" },
   { id: 4, cord: { top: "180px", left: "480px",  transform:"SkewY(-10deg) rotate(-5deg)"}, customStyle: " w-[50px] h-[50px]" },
   { id: 5, cord: { top: "200px", left: "425px",  transform:"SkewY(-10deg) rotate(-25deg)"}, customStyle: " w-[35px] h-[90px]" },
   { id: 6, cord: { top: "210px", left: "360px",  transform:"SkewY(-10deg) rotate(-5deg)"}, customStyle: " w-[50px] h-[50px]" },
   { id: 7, cord: { top: "230px", left: "310px",  transform:"SkewY(-10deg) rotate(-20deg)"}, customStyle: " w-[50px] h-[100px]" },
   { id: 8, cord: { top: "265px", left: "250px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[33px]" },
   { id: 9, cord: { top: "300px", left: "260px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[25px]" },
   { id: 10, cord: { top: "325px", left: "280px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[40px]" },
   { id: 11, cord: { top: "360px", left: "320px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[30px]" },
   { id: 12, cord: { top: "385px", left: "340px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[45px]" },
   { id: 13, cord: { top: "420px", left: "370px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[50px]" },
   { id: 14, cord: { top: "465px", left: "400px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[50px]" },
   { id: 15, cord: { top: "510px", left: "430px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[50px]" },
   { id: 16, cord: { top: "550px", left: "465px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[70px]" },
   { id: 17, cord: { top: "610px", left: "510px",  transform:" rotate(-18deg)"}, customStyle: " w-[60px] h-[50px]" },
   { id: 18, cord: { top: "660px", left: "550px",  transform:" rotate(-18deg)"}, customStyle: " w-[60px] h-[140px]" },
  //  { id: 19, cord: { top: "220px", left: "480px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[25px]" },
   { id: 19, cord: { top: "255px", left: "375px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[35px]" },
   { id: 20, cord: { top: "290px", left: "400px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[35px]" },
   { id: 21, cord: { top: "315px", left: "435px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[35px]" },
   { id: 22, cord: { top: "350px", left: "460px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[35px]" },
   { id: 23, cord: { top: "380px", left: "490px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[45px]" },
   { id: 24, cord: { top: "425px", left: "530px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[35px]" },
   { id: 25, cord: { top: "455px", left: "565px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[40px]" },
   { id: 26, cord: { top: "500px", left: "590px",  transform:" rotate(-18deg)"}, customStyle: " w-[70px] h-[60px]" },
   { id: 27, cord: { top: "545px", left: "650px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[60px]" },
   { id: 28, cord: { top: "595px", left: "695px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[55px]" },
   { id: 29, cord: { top: "645px", left: "730px",  transform:" rotate(-30deg)"}, customStyle: " w-[70px] h-[80px]" },
   { id: 30, cord: { top: "725px", left: "760px",  transform:" rotate(-35deg)"}, customStyle: " w-[100px] h-[80px]" },

   
 ];
const SelectionOfApartments = () => {
  const [currentApartment, setCurrentApartment] = useState(0);
  const [light, setLight] = useState(false);

  const getCurrentImage = () => {
    return "";
  };
 const navigate =useNavigate()
  return (
    <div className="select-none puff-in-center relative min-w-[1820px] min-h-[1080px] w-full h-full">
      <Button
            type="primary"
            size="large"
            className=" select-none absolute top-10 right-10 rounded-xl z-[55]"
            onClick={() => {
               navigate('/');
               // mutate({ data: '130000' });
            }}
         >
            <MdOutlineKeyboardDoubleArrowLeft className=" select-none text-[46px]" />
         </Button>{' '}
     
        <Button
          type="primary"
          shape="circle"
          size="large"
           className=" select-none absolute top-10 left-10  z-[55]"
          icon={light ? <FaRegLightbulb /> : <FaLightbulb  className='text-yellow-500'/>}
          onClick={() => setLight(!light)}
        />
   

      <img
        src={background}
        alt=""
        className="select-none w-full h-full min-h-[1080px] min-w-[1820px] object-cover absolute z-40"
      />

      {blockCoordinates.map((block) =>
        
          <div
            key={block.id}
         
            className={`absolute border border-red-500 text-black p-2 rounded z-50 transform ${block.customStyle}`}
            style={{
               backgroundColor: `hsla(${block.id * 20}, 70%, 50%, 0.5)`,
              top: block.cord?.top ?? 'auto',
              left: block.cord?.left ?? 'auto',
              bottom: block.cord?.bottom ?? 'auto',
              right: block.cord?.right ?? 'auto',
              transform: block.cord?.transform ?? 'none',
            }}
            onClick={() => setCurrentApartment(block.id)}
          >
             {block.id}
          </div>
       
      )}

      {currentApartment !== 0 && (
        <img
          src={getCurrentImage()}
          alt=""
          className="select-none w-full h-full min-h-[1080px] min-w-[1820px] object-cover absolute z-40 fade-in-out"
        />
      )}
    </div>
  );
};

export default SelectionOfApartments;
