import { createRoot } from 'react-dom/client';

import './index.css';

import Provider from './Provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

createRoot(document.getElementById('root')!).render(
   <div className=" select-none w-full h-full min-w-[1820px] min-h-[1080px] overflow-scroll ">
      <QueryClientProvider client={queryClient}>
         <Provider />
      </QueryClientProvider>
   </div>,
);
