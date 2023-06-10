import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="fr">
      <title>WeSpawn</title>
      <meta name="description" content="WeSpawn est une plateforme qui vous aide à gérer l'e-sport" />
      <meta name="twitter:card" content="summary"></meta>
      <meta property="og:title" content="WeSpawn" />
      <meta property="og:url" content="https://www.wespawn.fr/" />
      <meta property="og:image" content="../../public/img/logo_wespawn.png" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>      
    </Html>
  )
}
