import block1251 from '../assets/25-etaj/1-blok/1.png';
import block1252 from '../assets/25-etaj/1-blok/2.png';
import block1261 from '../assets/26-etaj/1-blok/1.png';
import block1262 from '../assets/26-etaj/1-blok/2.png';

//=====
import block2251 from '../assets/25-etaj/2-blok/1.png';
import block2252 from '../assets/25-etaj/2-blok/2.png';
import block2261 from '../assets/26-etaj/2-blok/1.png';
import block2262 from '../assets/26-etaj/2-blok/2.png';

//=====
import block3251 from '../assets/25-etaj/3-blok/1.png';
import block3252 from '../assets/25-etaj/3-blok/2.png';
import block3261 from '../assets/26-etaj/3-blok/1.png';
import block3262 from '../assets/26-etaj/3-blok/2.png';

//=====
import block4251 from '../assets/25-etaj/4-blok/1.png';
import block4252 from '../assets/25-etaj/4-blok/2.png';
import block4261 from '../assets/26-etaj/4-blok/1.png';
import block4262 from '../assets/26-etaj/4-blok/2.png';

//=====

const ImageRrender2 = ({
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
               case '25':
                  switch (roomnumber) {
                     case 1:
                        return block1251;
                     case 2:
                        return block1252;
                     default:
                        return undefined;
                  }

               case '26':
                  switch (roomnumber) {
                     case 1:
                        return block1261;
                     case 2:
                        return block1262;

                     default:
                        return undefined;
                  }
               default:
                  return undefined;
            }
         case '2':
            switch (floor) {
               case '25':
                  switch (roomnumber) {
                     case 1:
                        return block2251;
                     case 2:
                        return block2252;
                     default:
                        return undefined;
                  }

               case '26':
                  switch (roomnumber) {
                     case 1:
                        return block2261;
                     case 2:
                        return block2262;

                     default:
                        return undefined;
                  }
               default:
                  return undefined;
            }
         case '3':
            switch (floor) {
               case '25':
                  switch (roomnumber) {
                     case 1:
                        return block3251;
                     case 2:
                        return block3252;
                     default:
                        return undefined;
                  }

               case '26':
                  switch (roomnumber) {
                     case 1:
                        return block3261;
                     case 2:
                        return block3262;

                     default:
                        return undefined;
                  }
               default:
                  return undefined;
            }
         case '4':
            switch (floor) {
               case '25':
                  switch (roomnumber) {
                     case 1:
                        return block4251;
                     case 2:
                        return block4252;
                     default:
                        return undefined;
                  }

               case '26':
                  switch (roomnumber) {
                     case 1:
                        return block4261;
                     case 2:
                        return block4262;

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
            <img
               src={getCurrentImageRenderer()}
               alt=""
               className="w-[60%] h-[80%]"
            />
         </div>
      </div>
   );
};

export default ImageRrender2;
