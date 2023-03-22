import Navigation from '@/components/core/Header/Navigation';
import TrackPlayer from '@/components/core/TrackPlayer';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlayerContext } from 'src/context/playerContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [player, setPlayer] = useState({
    name: '',
    artist: '',
    imageUrl: '',
    audioUrl: '',
  });

  return (
    <>
      <ThemeProvider>
        <PlayerContext.Provider value={{ player, setPlayer }}>
          <div className='relative h-screen overflow-x-hidden'>
            <div className='flex'>
              <Navigation />
              <div className='mx-auto w-[1500px]'>
                <Component {...pageProps} />
              </div>
            </div>
            <TrackPlayer />
          </div>
        </PlayerContext.Provider>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
