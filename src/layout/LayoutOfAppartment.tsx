import { Outlet, useNavigate } from 'react-router-dom';

import { Button } from 'antd';
import {
   MdKeyboardDoubleArrowDown,
   MdKeyboardDoubleArrowUp,
   MdOutlineKeyboardDoubleArrowLeft,
} from 'react-icons/md';
import { usePostRequst } from '../API';
import { generatePayload } from '../GlobalFunctions';

const Layout = () => {
   const pathname = window.location.pathname.split('/');
   const navigate = useNavigate();
   const { mutate } = usePostRequst();
   return (
      <div className=" select-none  puff-in-center relative min-w-[1910px] min-h-[1080px] w-full h-full">
         <Button
            type="primary"
            size="large"
            className=" dontSelct select-none absolute top-10 left-10 rounded-xl z-[55]"
            onClick={() => {
               navigate('/apartment-section');
               mutate({
                  data: generatePayload(
                     Number(pathname[pathname.length - 1].split('-')[0]),
                     Number(pathname[pathname.length - 1].split('-')[1]) || 0,
                     0,
                  ),
               });
            }}
         >
            <MdOutlineKeyboardDoubleArrowLeft className=" select-none text-[46px]" />
         </Button>
         <div className=" absolute left-10 top-[40%] select-none flex flex-col gap-[10px]">
            <Button
               // disabled={pathname[pathname.length - 1].split('-')[0] === '4'}
               onClick={() => {
                  navigate(
                     `${
                        pathname[pathname.length - 1].split('-')[0] === '4'
                           ? '1'
                           : Number(
                                pathname[pathname.length - 1].split('-')[0],
                             ) + 1
                     }-${pathname[pathname.length - 1].split('-')[1]}`,
                  );
                  mutate({
                     data: generatePayload(
                        Number(pathname[pathname.length - 1].split('-')[0]) + 1,
                        Number(pathname[pathname.length - 1].split('-')[1]),
                        0,
                     ),
                  });
               }}
               type="primary"
               size="large"
               className=" select-none  w-[200px] h-[50px]  rounded-xl z-[55] text-3xl"
            >
               <MdKeyboardDoubleArrowUp />
            </Button>{' '}
            <Button
               type="primary"
               size="large"
               className=" select-none  w-[200px] h-[50px]  rounded-xl z-[55] text-3xl"
            >
               Блок: {pathname[pathname.length - 1].split('-')[0]}
            </Button>{' '}
            <Button
               // disabled={pathname[pathname.length - 1].split('-')[0] === '1'}
               onClick={() => {
                  navigate(
                     `${
                        pathname[pathname.length - 1].split('-')[0] === '1'
                           ? '4'
                           : Number(
                                pathname[pathname.length - 1].split('-')[0],
                             ) - 1
                     }-${pathname[pathname.length - 1].split('-')[1]}`,
                  );
                  mutate({
                     data: generatePayload(
                        Number(pathname[pathname.length - 1].split('-')[0]) - 1,
                        Number(pathname[pathname.length - 1].split('-')[1]),
                        0,
                     ),
                  });
               }}
               type="primary"
               size="large"
               className=" select-none  w-[200px] h-[50px]  rounded-xl z-[55] text-3xl"
            >
               <MdKeyboardDoubleArrowDown />
            </Button>
         </div>
         <div className=" absolute right-10 top-[40%] select-none flex flex-col gap-[10px]">
            <Button
               // disabled={pathname[pathname.length - 1].split('-')[1] === '26'}
               onClick={() => {
                  navigate(
                     `${Number(pathname[pathname.length - 1].split('-')[0])}-${
                        pathname[pathname.length - 1].split('-')[1] === '26'
                           ? '3'
                           : Number(
                                pathname[pathname.length - 1].split('-')[1],
                             ) + 1
                     }`,
                  );
                  mutate({
                     data: generatePayload(
                        Number(pathname[pathname.length - 1].split('-')[0]),
                        Number(pathname[pathname.length - 1].split('-')[1]) + 1,
                        0,
                     ),
                  });
               }}
               type="primary"
               size="large"
               className=" select-none  w-[200px] h-[50px]  rounded-xl z-[55] text-3xl"
            >
               <MdKeyboardDoubleArrowUp />
            </Button>{' '}
            <Button
               type="primary"
               size="large"
               className=" select-none  w-[200px] h-[50px]  rounded-xl z-[55] text-3xl"
            >
               Этаж: {pathname[pathname.length - 1].split('-')[1]}
            </Button>{' '}
            <Button
               // disabled={pathname[pathname.length - 1].split('-')[1] === '3'}
               onClick={() => {
                  navigate(
                     `${Number(pathname[pathname.length - 1].split('-')[0])}-${
                        pathname[pathname.length - 1].split('-')[1] === '3'
                           ? '26'
                           : Number(
                                pathname[pathname.length - 1].split('-')[1],
                             ) - 1
                     }`,
                  );
                  mutate({
                     data: generatePayload(
                        Number(pathname[pathname.length - 1].split('-')[0]),
                        Number(pathname[pathname.length - 1].split('-')[1]) - 1,
                        0,
                     ),
                  });
               }}
               type="primary"
               size="large"
               className=" select-none  w-[200px] h-[50px]  rounded-xl z-[55] text-3xl"
            >
               <MdKeyboardDoubleArrowDown />
            </Button>
         </div>
         <div className="  select-none  absolute bottom-10 left-10 text-3xl font-bold z-[50] ">
            {/* <img
               src={karta}
               className=" select-none w-[400px] h-[100px]   rounded-xl l"
               alt=""
            /> */}
         </div>
         <div className=" select-none  absolute bottom-3 right-0 text-3xl font-bold ">
            {/* <img
               src={mbl}
               className="  select-none w-[300px] h-[200px] rounded-xl l  "
               alt=""
            /> */}
         </div>
         <Outlet />
      </div>
   );
};

export default Layout;
