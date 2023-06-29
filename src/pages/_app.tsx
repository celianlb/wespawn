import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import localFont from 'next/font/local';
import MatomoScript from '@/components/MatomoScript';
import React, { useEffect } from 'react';
import Axeptio from '@/components/Axeptio';
import TagManager from 'gtm-for-react'

const MontserratBlack = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat-Black.ttf',
      weight: '900',
      style: 'black',
    },
  ],
  variable: '--font-montserratblack',
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

const RNSSanzBold = localFont({
  src: [
    {
      path: '../../public/fonts/RNSSanz-Bold.otf',
      weight: '800',
      style: 'bold',
    },
  ],
  variable: '--font-rnssanzbold',
});

const tagManagerArgs = {
    gtmId: 'GTM-PPT4LFM'
}

export default function App({ Component, pageProps }: AppProps) {

useEffect(() => {
  TagManager.initialize(tagManagerArgs)
}, [])

  return (
    <main
      className={`${MontserratBlack.variable} ${RNSSanz.variable} ${RNSSanzBold.variable}`}
    >
      <Component {...pageProps} />
      <MatomoScript />
      <Axeptio />    
    </main>
  );
}
