import block1 from "../assets/Appartments/1.png";
import block2 from "../assets/Appartments/2.png";
import block3 from "../assets/Appartments/3.png";
import block4 from "../assets/Appartments/4.png";
import block5 from "../assets/Appartments/5.png";
import block6 from "../assets/Appartments/6.png";
import block7 from "../assets/Appartments/7.png";
import block8 from "../assets/Appartments/8.png";
import block9 from "../assets/Appartments/9.png";
import block10 from "../assets/Appartments/10.png";
import block11 from "../assets/Appartments/11.png";
import block12 from "../assets/Appartments/12.png";
import block13 from "../assets/Appartments/13.png";
import block14 from "../assets/Appartments/14.png";
import block15 from "../assets/Appartments/15.png";
import block16 from "../assets/Appartments/16.png";
import block17 from "../assets/Appartments/17.png";
import block18 from "../assets/Appartments/18.png";
import block19 from "../assets/Appartments/19.png";
import block20 from "../assets/Appartments/20.png";
import block21 from "../assets/Appartments/21.png";
import block22 from "../assets/Appartments/22.png";
import block23 from "../assets/Appartments/23.png";
import block24 from "../assets/Appartments/24.png";
import block25 from "../assets/Appartments/25.png";
import block26 from "../assets/Appartments/26.png";
import block27 from "../assets/Appartments/27.png";
import block28 from "../assets/Appartments/28.png";
import block29 from "../assets/Appartments/29.png";
import block30 from "../assets/Appartments/30.png";
import block31 from "../assets/Appartments/31.png";
import block32 from "../assets/Appartments/32.png";
import block33 from "../assets/Appartments/33.png";
import block34 from "../assets/Appartments/34.png";
import block35 from "../assets/Appartments/35.png";
import block36 from "../assets/Appartments/36.png";
import block37 from "../assets/Appartments/37.png";
import block38 from "../assets/Appartments/38.png";
import block39 from "../assets/Appartments/39.png";
import block40 from "../assets/Appartments/40.png";
import block41 from "../assets/Appartments/41.png";
import block42 from "../assets/Appartments/42.png";
import block43 from "../assets/Appartments/43.png";
import block44 from "../assets/Appartments/44.png";
import block45 from "../assets/Appartments/45.png";
import block46 from "../assets/Appartments/46.png";
import block47 from "../assets/Appartments/47.png";
import block48 from "../assets/Appartments/48.png";
import block49 from "../assets/Appartments/49.png";
import block50 from "../assets/Appartments/50.png";
import block51 from "../assets/Appartments/51.png";
import block52 from "../assets/Appartments/52.png";
import block53 from "../assets/Appartments/53.png";
import block54 from "../assets/Appartments/54.png";
import block55 from "../assets/Appartments/55.png";
import block56 from "../assets/Appartments/56.png";
import block57 from "../assets/Appartments/57.png";
import block58 from "../assets/Appartments/58.png";
import block59 from "../assets/Appartments/59.png";
import block60 from "../assets/Appartments/60.png";
import block61 from "../assets/Appartments/61.png";
import block62 from "../assets/Appartments/62.png";
import block63 from "../assets/Appartments/63.png";
import block64 from "../assets/Appartments/64.png";
import block65 from "../assets/Appartments/65.png";
import block66 from "../assets/Appartments/66.png";
import block67 from "../assets/Appartments/67.png";
import block68 from "../assets/Appartments/68.png";
import block69 from "../assets/Appartments/69.png";
import block70 from "../assets/Appartments/70.png";
import block71 from "../assets/Appartments/71.png";
import block72 from "../assets/Appartments/72.png";
import block73 from "../assets/Appartments/73.png";
import block74 from "../assets/Appartments/74.png";
import block75 from "../assets/Appartments/75.png";
import block76 from "../assets/Appartments/76.png";
import block77 from "../assets/Appartments/77.png";
import block78 from "../assets/Appartments/78.png";
import block79 from "../assets/Appartments/79.png";
import block80 from "../assets/Appartments/80.png";
import block81 from "../assets/Appartments/81.png";
import block82 from "../assets/Appartments/82.png";
import block83 from "../assets/Appartments/83.png";
import block84 from "../assets/Appartments/84.png";
import block85 from "../assets/Appartments/85.png";
import block86 from "../assets/Appartments/86.png";
import block87 from "../assets/Appartments/87.png";
import block88 from "../assets/Appartments/88.png";
import block89 from "../assets/Appartments/89.png";
import block90 from "../assets/Appartments/90.png";
import block91 from "../assets/Appartments/91.png";
import block92 from "../assets/Appartments/92.png";
import block93 from "../assets/Appartments/93.png";
import block94 from "../assets/Appartments/94.png";
import block95 from "../assets/Appartments/95.png";
import random1 from "../assets/random/1.png"
import random2 from "../assets/random/2.png"
import random3 from "../assets/random/3.png"
import random4 from "../assets/random/4.png"

import { useEffect, useState } from 'react';
import background from '../assets/Appartments/back.png';
import { Button, ConfigProvider, Drawer } from 'antd';
import { FaRegLightbulb, FaLightbulb, FaPowerOff } from "react-icons/fa";
import { MdMenu, MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { usePostRequst } from "../API";

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
     { id: 89, cord: { top: "570px", left: "1520px",}, customStyle: "w-[125px] h-[110px]" },
     { id: 90, cord: { top: "410px", left: "120px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[80px] h-[50px]" },
     { id: 91, cord: { top: "455px", left: "125px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[80px] h-[50px]" },
     { id: 92, cord: { top: "500px", left: "145px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[80px] h-[40px]" },
     { id: 93, cord: { top: "535px", left: "185px",transform: "rotate(-10deg) SkewY(-10deg) "}, customStyle: "w-[80px] h-[110px]" },
     { id: 94, cord: { top: "300px", left: "50px",}, customStyle: "w-[65px] h-[30px]" },
     { id: 95, cord: { top: "340px", left: "75px",}, customStyle: "w-[95px] h-[70px]" },
   
   
 ];
const SelectionOfApartments = () => {
  const [currentApartment, setCurrentApartment] = useState(0);
  const [light, setLight] = useState(false);
  const [openDrawer,setOpenDrawer]=useState(false)
const [randomImage,setRandomImage]=useState(1)
useEffect(() => {
 setTimeout(() => {
   setRandomImage((p)=>{
    return p===1?2:p===2?3:p===3?4:1
   })
 }, 2000);
},[randomImage])

  const getCurrentImage = () => {
    switch (currentApartment) {
      case 1:
        return block1;
      case 2:
        return block2;
      case 3:
        return block3;
      case 4:
        return block4;
      case 5:
        return block5;
      case 6:
        return block6;
      case 7:
        return block7;
      case 8:
        return block8;
      case 9:
        return block9;
      case 10:
        return block10;
      case 11:
        return block11;
      case 12:
        return block12;
      case 13:
        return block13;
      case 14:
        return block14;
      case 15:
        return block15;
      case 16:
        return block16;
      case 17:
        return block17;
      case 18:
        return block18;
      case 19:
        return block19;
      case 20:
        return block20;
      case 21:
        return block21;
      case 22:
        return block22;
      case 23:
        return block23;
      case 24:
        return block24;
      case 25:
        return block25;
      case 26:
        return block26;
      case 27:
        return block27;
      case 28:
        return block28;
      case 29:
        return block29;
      case 30:
        return block30;
      case 31:
        return block31;
      case 32:
        return block32;
      case 33:
        return block33;
      case 34:
        return block34;
      case 35:
        return block35;
      case 36:
        return block36;
      case 37:
        return block37;
      case 38:
        return block38;
      case 39:
        return block39;
      case 40:
        return block40;
      case 41:
        return block41;
      case 42:
        return block42;
      case 43:
        return block43;
      case 44:
        return block44;
      case 45:
        return block45;
      case 46:
        return block46;
      case 47:
        return block47;
      case 48:
        return block48;
      case 49:
        return block49;
      case 50:
        return block50;
      case 51:
        return block51;
      case 52:
        return block52;
      case 53:
        return block53;
      case 54:
        return block54;
      case 55:
        return block55;
      case 56:
        return block56;
      case 57:
        return block57;
      case 58:
        return block58;
      case 59:
        return block59;
      case 60:
        return block60;
      case 61:
        return block61;
      case 62:
        return block62;
      case 63:
        return block63;
      case 64:
        return block64;
      case 65:
        return block65;
      case 66:
        return block66;
      case 67:
        return block67;
      case 68:
        return block68;
      case 69:
        return block69;
      case 70:
        return block70;
      case 71:
        return block71;
      case 72:
        return block72;
      case 73:
        return block73;
      case 74:
        return block74;
      case 75:
        return block75;
      case 76:
        return block76;
      case 77:
        return block77;
      case 78:
        return block78;
      case 79:
        return block79;
      case 80:
        return block80;
      case 81:
        return block81;
      case 82:
        return block82;
      case 83:
        return block83;
      case 84:
        return block84;
      case 85:
        return block85;
      case 86:
        return block86;
      case 87:
        return block87;
      case 88:
        return block88;
      case 89:
        return block89;
      case 90:
        return block90;
      case 91:
        return block91;
      case 92:
        return block92;
      case 93:
        return block93;
      case 94:
        return block94;
      case 95:
        return block95;
      
      default:
        return "";
    }
  };
 const navigate =useNavigate();
 const { mutate } = usePostRequst();
  return (
    <div className="select-none puff-in-center relative min-w-[1820px] min-h-[1080px] w-full h-full">
      <Button
            type="primary"
            size="large"
            className=" select-none absolute top-10 right-10 rounded-xl z-[55]"
            onClick={() => {
               navigate('/');
               mutate({ data: '100' });
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
              // backgroundColor: `hsla(${block.id * 20}, 70%, 50%, 0.5)`,
              top: block.cord?.top ?? 'auto',
              left: block.cord?.left ?? 'auto',
              bottom: block.cord?.bottom ?? 'auto',
              right: block.cord?.right ?? 'auto',
              transform: block.cord?.transform ?? 'none',
            }}
            onClick={() =>{ setCurrentApartment(block.id);mutate({data:`${block.id}`})}}
          >
        {/* {block.id} */}
          </div>
      )}
      {currentApartment !== 0 && (
        <img
          src={getCurrentImage()}
          alt=""
          className="select-none w-full h-full min-h-[1080px] min-w-[1820px] object-cover absolute z-40 fade-in-out "
        />
      )}
      {currentApartment === 0 && (
        <img
          src={randomImage===1?random1:randomImage===2?random2:randomImage===3?random3:random4}
          alt=""
          className="select-none w-full h-full min-h-[1080px] min-w-[1820px] object-cover absolute z-40 fade-in-out "
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
        width={400}
        className='bg-black'
        >
          <div className='glass p-4'  >
            <div className='flex gap-4 justify-between items-center px-4'>

          <Button onClick={()=>{mutate({data:"100"});setCurrentApartment(0);}} className='text-xl w-full' type='primary' size='large'> Random</Button>
          <Button
          type="primary"
          shape="circle"
          size="large"
           className=" select-none  z-[55]"
          icon={light ? <FaRegLightbulb /> : <FaLightbulb  className='text-yellow-500'/>}
          onClick={() => {setLight(!light);mutate({data:"101"})}}
        />
          <Button
          type="primary"
          shape="circle"
          size="large"
           className=" select-none  z-[55]"
          icon={<FaPowerOff />}
          onClick={() => {setLight(false);mutate({data:"0"})}}
        />
            </div>
<div className='grid grid-cols-3 overflow-y-auto p-4  gap-[10px] max-h-[93vh] '>
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
