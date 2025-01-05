import block141 from '../assets/Appartments/1-block/rooms/4/1.png';
import block142 from '../assets/Appartments/1-block/rooms/4/2.png';
import block143 from '../assets/Appartments/1-block/rooms/4/3.png';
import block144 from '../assets/Appartments/1-block/rooms/4/4.png';
import block145 from '../assets/Appartments/1-block/rooms/4/5.png';
import block146 from '../assets/Appartments/1-block/rooms/4/6.png';
import block147 from '../assets/Appartments/1-block/rooms/4/7.png';
import block151 from '../assets/Appartments/1-block/rooms/4/1.png';
import block152 from '../assets/Appartments/1-block/rooms/5/2.png';
import block153 from '../assets/Appartments/1-block/rooms/5/3.png';
import block154 from '../assets/Appartments/1-block/rooms/5/4.png';
import block155 from '../assets/Appartments/1-block/rooms/5/5.png';
import block156 from '../assets/Appartments/1-block/rooms/5/6.png';
import block157 from '../assets/Appartments/1-block/rooms/5/7.png';
//=====
import block241 from '../assets/Appartments/2-block/rooms/4/1.png';
import block242 from '../assets/Appartments/2-block/rooms/4/2.png';
import block243 from '../assets/Appartments/2-block/rooms/4/3.png';
import block244 from '../assets/Appartments/2-block/rooms/4/4.png';
import block245 from '../assets/Appartments/2-block/rooms/4/5.png';
import block246 from '../assets/Appartments/2-block/rooms/4/6.png';
import block247 from '../assets/Appartments/2-block/rooms/4/7.png';
import block251 from '../assets/Appartments/2-block/rooms/5/1.png';
import block252 from '../assets/Appartments/2-block/rooms/5/2.png';
import block253 from '../assets/Appartments/2-block/rooms/5/3.png';
import block254 from '../assets/Appartments/2-block/rooms/5/4.png';
import block255 from '../assets/Appartments/2-block/rooms/5/5.png';
import block256 from '../assets/Appartments/2-block/rooms/5/6.png';
import block257 from '../assets/Appartments/2-block/rooms/5/7.png';
//=====
import block341 from '../assets/Appartments/3-block/rooms/4/1.png';
import block342 from '../assets/Appartments/3-block/rooms/4/2.png';
import block343 from '../assets/Appartments/3-block/rooms/4/3.png';
import block344 from '../assets/Appartments/3-block/rooms/4/4.png';
import block345 from '../assets/Appartments/3-block/rooms/4/5.png';
import block346 from '../assets/Appartments/3-block/rooms/4/6.png';
import block347 from '../assets/Appartments/3-block/rooms/4/7.png';
import block351 from '../assets/Appartments/3-block/rooms/5/1.png';
import block352 from '../assets/Appartments/3-block/rooms/5/2.png';
import block353 from '../assets/Appartments/3-block/rooms/5/3.png';
import block354 from '../assets/Appartments/3-block/rooms/5/4.png';
import block355 from '../assets/Appartments/3-block/rooms/5/5.png';
import block356 from '../assets/Appartments/3-block/rooms/5/6.png';
import block357 from '../assets/Appartments/3-block/rooms/5/7.png';
//=====
import block441 from '../assets/Appartments/4-block/rooms/4/1.png';
import block442 from '../assets/Appartments/4-block/rooms/4/2.png';
import block443 from '../assets/Appartments/4-block/rooms/4/3.png';
import block444 from '../assets/Appartments/4-block/rooms/4/4.png';
import block445 from '../assets/Appartments/4-block/rooms/4/5.png';
import block446 from '../assets/Appartments/4-block/rooms/4/6.png';
import block447 from '../assets/Appartments/4-block/rooms/4/7.png';
import block448 from '../assets/Appartments/4-block/rooms/4/8.png';
import block449 from '../assets/Appartments/4-block/rooms/4/9.png';
import block451 from '../assets/Appartments/4-block/rooms/5/1.png';
import block452 from '../assets/Appartments/4-block/rooms/5/2.png';
import block453 from '../assets/Appartments/4-block/rooms/5/3.png';
import block454 from '../assets/Appartments/4-block/rooms/5/4.png';
import block455 from '../assets/Appartments/4-block/rooms/5/5.png';
import block456 from '../assets/Appartments/4-block/rooms/5/6.png';
import block457 from '../assets/Appartments/4-block/rooms/5/7.png';
import block458 from '../assets/Appartments/4-block/rooms/5/8.png';
import block459 from '../assets/Appartments/4-block/rooms/5/9.png';

const ImageRrender = ({
   closeFn,
   roomnumber,
   isOpen,
}: {
   closeFn: () => void;
   roomnumber: number;
   isOpen: boolean;
}) => {
   const pathname = window.location.pathname.split('/');
   const block = pathname[pathname.length - 1].split('-')[0];
   const floor = pathname[pathname.length - 1].split('-')[1];
   const getCurrentImageRenderer = () => {
      switch (block) {
         case '1':
            switch (floor) {
               case '4':
               case '6':
               case '7':
               case '9':
               case '10':
               case '12':
               case '13':
               case '16':
               case '18':
               case '19':
               case '21':
               case '22':
               case '24':
                  switch (roomnumber) {
                     case 1:
                        return block141;
                     case 2:
                        return block142;
                     case 3:
                        return block143;
                     case 4:
                        return block144;
                     case 5:
                        return block145;
                     case 6:
                        return block146;
                     case 7:
                        return block147;
                     default:
                        return undefined;
                  }
               case '5':
               case '8':
               case '11':
               case '14':
               case '15':
               case '17':
               case '20':
                  switch (roomnumber) {
                     case 1:
                        return block151;
                     case 2:
                        return block152;
                     case 3:
                        return block153;
                     case 4:
                        return block154;
                     case 5:
                        return block155;
                     case 6:
                        return block156;
                     case 7:
                        return block157;
                     default:
                        return undefined;
                  }
               default:
                  return undefined;
            }
         case '2':
            switch (floor) {
               case '4':
               case '6':
               case '7':
               case '9':
               case '10':
               case '12':
               case '13':
               case '16':
               case '18':
               case '19':
               case '21':
               case '22':
               case '24':
                  switch (roomnumber) {
                     case 1:
                        return block241;
                     case 2:
                        return block242;
                     case 3:
                        return block243;
                     case 4:
                        return block244;
                     case 5:
                        return block245;
                     case 6:
                        return block246;
                     case 7:
                        return block247;
                     default:
                        return undefined;
                  }
               case '5':
               case '8':
               case '11':
               case '14':
               case '15':
               case '17':
               case '20':
                  switch (roomnumber) {
                     case 1:
                        return block251;
                     case 2:
                        return block252;
                     case 3:
                        return block253;
                     case 4:
                        return block254;
                     case 5:
                        return block255;
                     case 6:
                        return block256;
                     case 7:
                        return block257;
                     default:
                        return undefined;
                  }
               default:
                  return undefined;
            }
         case '3':
            switch (floor) {
               case '4':
               case '6':
               case '7':
               case '9':
               case '10':
               case '12':
               case '13':
               case '16':
               case '18':
               case '19':
               case '21':
               case '22':
               case '24':
                  switch (roomnumber) {
                     case 1:
                        return block341;
                     case 2:
                        return block342;
                     case 3:
                        return block343;
                     case 4:
                        return block344;
                     case 5:
                        return block345;
                     case 6:
                        return block346;
                     case 7:
                        return block347;
                     default:
                        return undefined;
                  }
               case '5':
               case '8':
               case '11':
               case '14':
               case '15':
               case '17':
               case '20':
                  switch (roomnumber) {
                     case 1:
                        return block351;
                     case 2:
                        return block352;
                     case 3:
                        return block353;
                     case 4:
                        return block354;
                     case 5:
                        return block355;
                     case 6:
                        return block356;
                     case 7:
                        return block357;
                     default:
                        return undefined;
                  }
               default:
                  return undefined;
            }
         case '4':
            switch (floor) {
               case '4':
               case '6':
               case '7':
               case '9':
               case '10':
               case '12':
               case '13':
               case '16':
               case '18':
               case '19':
               case '21':
               case '22':
               case '24':
                  switch (roomnumber) {
                     case 1:
                        return block441;
                     case 2:
                        return block442;
                     case 3:
                        return block443;
                     case 4:
                        return block444;
                     case 5:
                        return block445;
                     case 6:
                        return block446;
                     case 7:
                        return block447;
                     case 8:
                        return block448;
                     case 9:
                        return block449;
                     default:
                        return undefined;
                  }
               case '5':
               case '8':
               case '11':
               case '14':
               case '15':
               case '17':
               case '20':
                  switch (roomnumber) {
                     case 1:
                        return block451;
                     case 2:
                        return block452;
                     case 3:
                        return block453;
                     case 4:
                        return block454;
                     case 5:
                        return block455;
                     case 6:
                        return block456;
                     case 7:
                        return block457;
                     case 8:
                        return block458;
                     case 9:
                        return block459;
                     default:
                        return undefined;
                  }
               default:
                  return undefined;
            }
      }
   };
   return (
      <div
         onClick={closeFn}
         className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all    ${
            !isOpen ? 'opacity-0 z-[-10]' : 'opacity-1  z-[50]'
         }`}
      >
         <div className="flex  flex-col items-center justify-center h-full">
            <div className="text-[#2f2f2f] text-center  font-serif text-[36px] absolute top-[450px] right-[30%]">
               {block}
            </div>
            <div className="text-[#2f2f2f] text-center  font-serif text-[36px] absolute top-[525px] right-[30%]">
               {roomnumber}
            </div>
            <div className="text-[#2f2f2f] text-center  font-serif text-[36px] absolute top-[610px] right-[30%]">
               {floor}
            </div>
          
            <img
               src={getCurrentImageRenderer()}
               alt=""
               className="w-[60%] h-[80%]"
            />
         </div>
      </div>
   );
};

export default ImageRrender;
