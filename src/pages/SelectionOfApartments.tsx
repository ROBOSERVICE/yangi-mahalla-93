
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
   { id: 1, cord: { top: "545px", left: "465px", }, customStyle: " w-[35px] h-[70px]" },
   
  
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
