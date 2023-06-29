import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="fr">
      <meta name="twitter:card" content="summary"/>
      <meta property="og:title" content="WeSpawn" />
      <meta property="og:url" content="https://www.wespawn.fr/" />
      <meta property="og:image" content="../../public/img/logo_wespawn.png" />
      <meta name="google-site-verification" content="YPMqr6gttIsVaFXw76yNbBvKWSOIglMU1LBiVkd8Ufk" />
      <Head>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
