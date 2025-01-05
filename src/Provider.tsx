import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Button } from 'antd';
import { router } from './mqRouter';

const FullScreenComponent = () => {
   const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

   // Ekran fullscreen rejimida ekanligini tekshirish uchun
   const checkFullScreen = () => {
      setIsFullScreen(!!document.fullscreenElement);
   };

   // Fullscreen rejimini o'zgartirganda eshituvchi qo'shish
   useEffect(() => {
      document.addEventListener('fullscreenchange', checkFullScreen);
      return () => {
         document.removeEventListener('fullscreenchange', checkFullScreen);
      };
   }, []);

   // Fullscreen rejimiga o'tish funksiyasi
   const goToFullScreen = () => {
      if (document.documentElement.requestFullscreen) {
         document.documentElement.requestFullscreen();
      }
   };

   return (
      <>
         {isFullScreen ? (
            <RouterProvider router={createBrowserRouter(router)} />
         ) : (
            <div className="flex items-center justify-center h-full w-full min-w-[1820px] min-h-[1080px] ">
               <Button size="large" type="primary" onClick={goToFullScreen}>
                  Go to full screen
               </Button>
            </div>
         )}
      </>
   );
};

export default FullScreenComponent;
