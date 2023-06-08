import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Countdown from '@/components/Countdown'
import NewsletterForm from '@/components/Newsletters'

export default function Home() {
  return (
    <main>
      <Header />
      <body>
        <div className="wrapper">
              <div className="layout min-h-[250px]"></div>
              <div id='section1' className='section-about container min-h-[250px]'>
                <Image 
                  src= '/img/logo.png'
                  width={100}
                  height={100}
                  alt='WeSpawn Logo'
                  className='mb-2'
                />
                <p>
                  L'écosystème qui facilite <b>l'organisation des compétitions d'e-sport</b> pour une immersion professionnelles de tous les joueurs.
                </p>                
                <button className='bg-yellow-spec btn1 font-bold'><Link href="#section2">En savoir plus</Link></button>              
              </div>
              <div id='section2' className=' container min-h-[250px]'>
                <h1 className='mb-8'>C'est quoi ?</h1>
                <p className=''>
                  Conçu pour les organisateurs d'évènements e-sportif, La plateforme <b>WESPAWN</b> vous garantie une <b>aide à la gestion</b> de vos compétitions en toute simplicité et une <b>visibilité assurée</b> auprès des joueurs.
                </p>
              </div>
              <div className="layout2"></div>
              <div className='container'>
                <h1 className='font-ppneuemachina'>Ouverture dans </h1>
                <Countdown/>
              </div>
              <div id='section3' className='min-h-[250px] container'>
                <h1 className='mb-6'>Abonne toi à la newsletter</h1>
                <NewsletterForm />
              </div>
              <div className='container'>
                <Footer />
              </div>
        </div>
      </body>
    </main>
  )
}
