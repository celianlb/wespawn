import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import localFont from 'next/font/local';
import MatomoScript from '@/components/MatomoScript';
import React from 'react';

const PPNeueMachina = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMachina-PlainUltrabold.otf',
      weight: '900',
      style: 'black',
    },
  ],
  variable: '--font-ppneuemachina',
});

const RNSSanz = localFont({
  src: [
    {
      path: '../../public/fonts/RNSSanz-Normal.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-rnssanz',
});

const visbycf = localFont({
  src: [
    {
      path: '../../public/fonts/visbycf-regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-visbycf',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${PPNeueMachina.variable} ${RNSSanz.variable} ${visbycf.variable}`}
    >
      <Component {...pageProps} />
      <MatomoScript />
    </main>
  );
}