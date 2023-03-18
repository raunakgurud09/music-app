import Navigation from '@/components/core/Header/Navigation';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
