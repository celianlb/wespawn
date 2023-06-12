import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="fr">
      <title>WeSpawn</title>
      <meta name="description" content="WeSpawn facilite la gestion de vos compétitions esport grâce à nos outils pensés par des professionnels du gaming. Retrouvez notre gamme complète de services comme la location de salles, la vente de billets et d'équipements électroniques. Développez votre communauté de passionnés et concentrez vos efforts sur la production de vos évènements." />
      <meta name="twitter:card" content="summary"/>
      <meta property="og:title" content="WeSpawn" />
      <meta property="og:url" content="https://www.wespawn.fr/" />
      <meta property="og:image" content="../../public/img/logo_wespawn.png" />
      <Head>
        <GoogleAnalytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>      
    </Html>
  )
}
