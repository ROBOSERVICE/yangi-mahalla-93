
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
import { Button, ConfigProvider, Drawer } from 'antd';
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { MdMenu, MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router';

const blockCoordinates:{id:number,cord?:{top?:string,left?:string,bottom?:string,right?:string,transform?:string},customStyle?:string}[] = [
   { id: 1, cord: { top: "130px", left: "630px",  transform:"SkewY(-10deg) rotate(-5deg)"}, customStyle: " w-[45px] h-[80px]" },
   { id: 2, cord: { top: "150px", left: "580px",  transform:"SkewY(-10deg) rotate(-5deg)"}, customStyle: " w-[45px] h-[50px]" },
   { id: 3, cord: { top: "160px", left: "540px",  transform:"SkewY(-10deg) rotate(-5deg)"}, customStyle: " w-[35px] h-[80px]" },
   { id: 4, cord: { top: "180px", left: "480px",  transform:"SkewY(-10deg) rotate(-5deg)"}, customStyle: " w-[50px] h-[50px]" },
   { id: 5, cord: { top: "200px", left: "425px",  transform:"SkewY(-10deg) rotate(-25deg)"}, customStyle: " w-[45px] h-[90px]" },
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
   { id: 30, cord: { top: "705px", left: "780px",  transform:" rotate(-30deg)"}, customStyle: " w-[80px] h-[80px]" },
   { id: 31, cord: { top: "775px", left: "830px",  transform:" rotate(-30deg)"}, customStyle: " w-[100px] h-[130px]" },
   { id: 32, cord: { top: "230px", left: "480px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[30px]" },
   { id: 33, cord: { top: "250px", left: "510px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[45px]" },
   { id: 34, cord: { top: "280px", left: "545px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[35px]" },
   { id: 35, cord: { top: "310px", left: "570px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[35px]" },
   { id: 36, cord: { top: "340px", left: "605px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[45px]" },
   { id: 37, cord: { top: "380px", left: "645px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[35px]" },
   { id: 38, cord: { top: "410px", left: "680px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[45px]" },
   { id: 39, cord: { top: "450px", left: "705px",  transform:" rotate(-18deg)"}, customStyle: " w-[70px] h-[55px]" },
   { id: 40, cord: { top: "485px", left: "770px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[60px]" },
   { id: 41, cord: { top: "535px", left: "805px",  transform:" rotate(-30deg)"}, customStyle: " w-[70px] h-[55px]" },
   { id: 42, cord: { top: "580px", left: "855px",  transform:" rotate(-30deg)"}, customStyle: " w-[70px] h-[80px]" },
   { id: 43, cord: { top: "630px", left: "930px",  transform:" rotate(-30deg)"}, customStyle: " w-[70px] h-[80px]" },
   { id: 44, cord: { top: "700px", left: "970px",  transform:" rotate(-30deg)"}, customStyle: " w-[80px] h-[70px]" },
   { id: 45, cord: { top: "750px", left: "1020px",  transform:" rotate(-30deg)"}, customStyle: " w-[120px] h-[120px]" },
   { id: 46, cord: { top: "190px", left: "580px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[30px]" },
   { id: 47, cord: { top: "215px", left: "610px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[40px]" },
   { id: 48, cord: { top: "245px", left: "650px",  transform:" rotate(-18deg)"}, customStyle: " w-[50px] h-[40px]" },
   { id: 49, cord: { top: "265px", left: "680px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[40px]" },
   { id: 50, cord: { top: "290px", left: "710px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[60px]" },
   { id: 51, cord: { top: "330px", left: "750px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[50px]" },
   { id: 52, cord: { top: "360px", left: "790px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[50px]" },
   { id: 53, cord: { top: "395px", left: "830px",  transform:" rotate(-30deg)"}, customStyle: " w-[70px] h-[100px]" },
   { id: 54, cord: { top: "165px", left: "670px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[30px]" },
   { id: 55, cord: { top: "185px", left: "700px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[40px]" },
   { id: 56, cord: { top: "210px", left: "740px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[40px]" },
   { id: 57, cord: { top: "240px", left: "770px",  transform:" rotate(-30deg)"}, customStyle: " w-[50px] h-[30px]" },
   { id: 58, cord: { top: "260px", left: "800px",  transform:" rotate(-30deg)"}, customStyle: " w-[60px] h-[50px]" },
   { id: 59, cord: { top: "295px", left: "850px",  transform:" rotate(-30deg)"}, customStyle: " w-[60px] h-[50px]" },
   { id: 60, cord: { top: "325px", left: "890px",  transform:" rotate(-30deg)"}, customStyle: " w-[70px] h-[40px]" },
   { id: 61, cord: { top: "360px", left: "920px",  transform:" rotate(-30deg)"}, customStyle: " w-[70px] h-[50px]" },
   //
     { id: 62, cord: { top: "400px", left: "950px", transform: "rotate(-20deg)" }, customStyle: "w-[50px] h-[52px]" },
     { id: 63, cord: { top: "435px", left: "995px", transform: "rotate(-30deg)" }, customStyle: "w-[50px] h-[55px]" },
     { id: 64, cord: { top: "480px", left: "1025px", transform: "rotate(-30deg)" }, customStyle: "w-[80px] h-[70px]" },
     { id: 65, cord: { top: "530px", left: "1100px", transform: "rotate(-30deg)" }, customStyle: "w-[70px] h-[68px]" },
     { id: 66, cord: { top: "575px", left: "1160px", transform: "rotate(-30deg)" }, customStyle: "w-[80px] h-[59px]" },
     { id: 67, cord: { top: "610px", left: "1210px", transform: "rotate(-30deg)" }, customStyle: "w-[90px] h-[104px]" },
     { id: 68, cord: { top: "700px", left: "1290px", transform: "rotate(-30deg)" }, customStyle: "w-[100px] h-[104px]" },
   
     { id: 69, cord: { top: "360px", left: "1030px",transform: "rotate(5deg)"}, customStyle: "w-[60px] h-[90px]" },
     { id: 70, cord: { top: "395px", left: "1085px",transform: "rotate(8deg)"}, customStyle: "w-[60px] h-[100px]" },
     { id: 71, cord: { top: "435px", left: "1135px",transform: "rotate(20deg)"}, customStyle: "w-[70px] h-[100px]" },
     { id: 72, cord: { top: "480px", left: "1190px",transform: "rotate(15deg) "}, customStyle: "w-[70px] h-[100px]" },
     { id: 73, cord: { top: "510px", left: "1250px",transform: "rotate(15deg) "}, customStyle: "w-[80px] h-[100px]" },
     { id: 74, cord: { top: "570px", left: "1325px",transform: "rotate(15deg) "}, customStyle: "w-[80px] h-[100px]" },
     { id: 75, cord: { top: "630px", left: "1400px",transform: "rotate(15deg) "}, customStyle: "w-[80px] h-[110px]" },
     { id: 76, cord: { top: "680px", left: "1480px",transform: "rotate(15deg) "}, customStyle: "w-[80px] h-[110px]" },
     { id: 77, cord: { top: "330px", left: "1100px",transform: "rotate(0deg) "}, customStyle: "w-[70px] h-[70px]" },
     { id: 78, cord: { top: "300px", left: "1165px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[50px] h-[90px]" },
     { id: 79, cord: { top: "270px", left: "1215px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[50px] h-[90px]" },
     { id: 80, cord: { top: "380px", left: "1200px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[55px] h-[90px]" },
     { id: 81, cord: { top: "360px", left: "1255px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[55px] h-[90px]" },
     { id: 82, cord: { top: "340px", left: "1310px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[55px] h-[90px]" },
     { id: 83, cord: { top: "440px", left: "1315px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[55px] h-[90px]" },
     { id: 84, cord: { top: "420px", left: "1365px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[55px] h-[90px]" },
     { id: 85, cord: { top: "400px", left: "1420px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[55px] h-[90px]" },
     { id: 86, cord: { top: "510px", left: "1420px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[55px] h-[90px]" },
     { id: 87, cord: { top: "480px", left: "1470px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[55px] h-[90px]" },
     { id: 88, cord: { top: "460px", left: "1520px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[55px] h-[90px]" },
     { id: 89, cord: { top: "590px", left: "1520px",}, customStyle: "w-[65px] h-[90px]" },
     { id: 90, cord: { top: "560px", left: "1590px",}, customStyle: "w-[65px] h-[90px]" },
     { id: 91, cord: { top: "300px", left: "50px",}, customStyle: "w-[65px] h-[30px]" },
     { id: 92, cord: { top: "340px", left: "75px",}, customStyle: "w-[95px] h-[70px]" },
     { id: 93, cord: { top: "410px", left: "120px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[80px] h-[50px]" },
     { id: 94, cord: { top: "455px", left: "125px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[80px] h-[50px]" },
     { id: 95, cord: { top: "500px", left: "145px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[80px] h-[40px]" },
     { id: 96, cord: { top: "535px", left: "185px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[80px] h-[110px]" },
   
   
 ];
const SelectionOfApartments = () => {
  const [currentApartment, setCurrentApartment] = useState(0);
  const [light, setLight] = useState(false);
  const [openDrawer,setOpenDrawer]=useState(false)

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
          // icon={light ? <FaRegLightbulb /> : <FaLightbulb  className='text-yellow-500'/>}
          icon={<MdMenu className="text-3xl" />}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
       
   

      <img
        src={background}
        alt=""
        className="select-none w-full h-full min-h-[1080px] min-w-[1820px] object-cover absolute z-40"
      />

      {blockCoordinates.map((block) =>
        
          <div
            key={block.id}
         
            className={`absolute bordwer border-rwed-500 text-black p-2 rounded z-50 transform ${block.customStyle}`}
            style={{
              //  backgroundColor: `hsla(${block.id * 20}, 70%, 50%, 0.5)`,
              top: block.cord?.top ?? 'auto',
              left: block.cord?.left ?? 'auto',
              bottom: block.cord?.bottom ?? 'auto',
              right: block.cord?.right ?? 'auto',
              transform: block.cord?.transform ?? 'none',
            }}
            onClick={() => setCurrentApartment(block.id)}
          >
        
          </div>
       
      )}

      {currentApartment !== 0 && (
        <img
          src={getCurrentImage()}
          alt=""
          className="select-none w-full h-full min-h-[1080px] min-w-[1820px] object-cover absolute z-40 fade-in-out"
        />
      )}
      <ConfigProvider
            theme={{
               components: {
                  Drawer: {
                    "colorBgElevated": "rgba(255,255,255,0)",
                     footerPaddingBlock: 0,
                     footerPaddingInline: 0,
                     padding: 0,
                     marginXS: 0,
                     paddingLG: 0,
                     paddingXS: 0,
                  },
               },
            }}
         >
          
      <Drawer
     
        placement="right"
        closable={false}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        width={300}
        className='bg-black'
       
        
        
        >
          <div className='glass p-4'  >
            <div className='flex gap-4 justify-between items-center'>

          <Button className='text-xl w-full' type='primary' size='large'> Random</Button>
          <Button
          type="primary"
          shape="circle"
          size="large"
           className=" select-none  z-[55]"
          icon={light ? <FaRegLightbulb /> : <FaLightbulb  className='text-yellow-500'/>}
          onClick={() => setLight(!light)}
        />
            </div>
<div className='grid grid-cols-2 overflow-y-auto p-4  gap-[10px] max-h-[93vh] '>
       {blockCoordinates.map((item)=>(
         <div onClick={()=>{
           setCurrentApartment(item.id);
           setOpenDrawer(!openDrawer)
          }}  className={`flex items-center justify-center text-white w-full h-[80px] text-center text-3xl  ${item.id===currentApartment?"bg-green-500":"bg-blue-500"} shshsh rounded-2xl` }>{item.id}</div>
        ))}
        </div>
        </div>
      </Drawer>
      </ConfigProvider>
     


    </div>
  );
};

export default SelectionOfApartments;
