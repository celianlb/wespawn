import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import MatomoScript from '@/components/MatomoScript'

const RNSSanzL = localFont({
  src: [
    {
      path: '../../public/fonts/RNSSanz-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
})

const RNSSanzB = localFont({
  src: [
    {
      path: '../../public/fonts/RNSSanz-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

const PPNeueMachina = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMachina-InktrapRegular.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={``}
    >
      <Component {...pageProps} />
      <MatomoScript />
    </main>
  );
}
