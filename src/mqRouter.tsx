/* eslint-disable react-refresh/only-export-components */
import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
// import Layout from './layout/LayoutOfAppartment';
import Lenta from './pages/Lenta';

const App = lazy(() => import('./App'));

const SelectionOfApartments = lazy(
   () => import('./pages/SelectionOfApartments'),
);

export const router = [
   {
      path: '*',
      element: (
         <div className="flex  justify-center items-center h-screen w-screen bg-black  min-w-[1910px] min-h-[1080px] mx-auto bg-cover bg-no-repeat bg-center">
            <h1 className="font-mono text-6xl text-white">404 :(</h1>
         </div>
      ),
   },
   { path: 'lenta', element: <Lenta /> },
   {
      path: '',
      element: <App />,
   },
   {
      path: '/apartment-section',
      element: <SelectionOfApartments />,
   },
  
].map((item) => ({
   ...item,
   element: (
      <Suspense
         fallback={
            <div className=" select-none w-screen h-screen  flex items-center justify-center">
               <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
               />
            </div>
         }
      >
         {item.element}
      </Suspense>
   ),
   loading: 'lazy',
}));
