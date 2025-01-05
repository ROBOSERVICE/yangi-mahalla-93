import block11 from '../assets/3-etaj/1-blok/1.png';
import block12 from '../assets/3-etaj/1-blok/2.png';

//=====
import block21 from '../assets/3-etaj/2-blok/1.png';
import block22 from '../assets/3-etaj/2-blok/2.png';

//=====
import block31 from '../assets/3-etaj/3-blok/1.png';
import block32 from '../assets/3-etaj/3-blok/2.png';

//=====
import block41 from '../assets/3-etaj/4-blok/1.png';
import block42 from '../assets/3-etaj/4-blok/2.png';

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
   // const pathname = window.location.pathname.split('/');
   // const block = pathname[pathname.length - 1].split('-')[0];
   // const floor = pathname[pathname.length - 1].split('-')[1];
   const getCurrentImageRenderer = () => {
      switch (roomnumber) {
         case 7:
            return block11;
         case 8:
            return block12;
         case 5:
            return block21;
         case 6:
            return block22;
         case 3:
            return block31;
         case 4:
            return block32;
         case 1:
            return block41;
         case 2:
            return block42;
         default:
            return block11;
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
            <h1>{roomnumber}</h1>
         </div>
      </div>
   );
};

export default ImageRrender2;
