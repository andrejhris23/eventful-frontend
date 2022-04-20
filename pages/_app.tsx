import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-full'>
      
     <Navigation />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
