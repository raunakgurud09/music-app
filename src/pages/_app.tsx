import Navigation from '@/components/core/Header/Navigation';
import TrackPlayer from '@/components/core/TrackPlayer';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <div className='relative h-screen overflow-x-hidden'>
          <div className='flex'>
            <Navigation />
            <div className='mx-auto w-[1500px]'>
              <Component {...pageProps} />
            </div>
          </div>
          <TrackPlayer />
        </div>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
