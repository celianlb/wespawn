import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <title>WeSpawn</title>
        <meta name="description" content="WeSpawn est une plateforme qui vous aide à gérer l'e-sport" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>      
    </Html>
  )
}
