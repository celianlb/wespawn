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
              <div id='presentation' className='section-about container min-h-[250px] '>
                <h1>
                  <Image 
                    src= '/img/logo.png'
                    width={217}
                    height={69}
                    alt='WeSpawn Logo'
                    className='mb-2'
                  />
                </h1>                
                <h1 className='pb-2 font-ppneuemachina'>L'ESPORT FAIT SUR MESURE</h1>
                <p className='font-rnssanz'>
                  L'écosystème qui facilite <b>l'organisation des compétitions d'e-sport</b> pour une immersion professionnelles de tous les joueurs.
                </p>                
                <button className='bg-var-yellow btn1 font-bold z-10' ><a href="#section2">En savoir plus</a></button>              
              </div>
              <div className=' container min-h-[250px]'>
                <h2 className='mb-8 pt-[106px] font-ppneuemachina'>C'EST QUOI ?</h2>
                <p className=''>
                  Conçu pour les organisateurs d'évènements e-sportif, La plateforme <b>WESPAWN</b> vous garantie une <b>aide à la gestion</b> de vos compétitions en toute simplicité et une <b>visibilité assurée</b> auprès des joueurs.
                </p>
              </div>
              <div className="layout2"></div>
              <div className='container'>
                <h2 className='font-ppneuemachina'>OUVERTURE DANS</h2>
                <Countdown/>
              </div>
              <div  className='min-h-[250px] container'>
                <h1 className='mb-6' id='newsletter'>Abonne toi à la newsletter</h1>
                <NewsletterForm />
              </div>
              <div className='container' id='contact'>
                <Footer />
              </div>
        </div>
      </body>
    </main>
  )
}
