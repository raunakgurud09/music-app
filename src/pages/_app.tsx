import Navigation from '@/components/core/Header/Navigation';
import TrackPlayer from '@/components/core/TrackPlayer';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <div className='relative h-screen overflow-x-hidden'>
          <div className='flex'>
            <Navigation />
            <div className='w-[1500px] mx-auto'>
              <Component {...pageProps} />
            </div>
          </div>
          <TrackPlayer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
