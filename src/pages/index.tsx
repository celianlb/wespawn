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
        <div className="wrapper container pt-8">
              <div id='presentation' className='flex flex-col mb-[106px] md:flex-row-reverse md:mb-0'>
                <Image
                  src="/img/gamer1.png"
                  alt="Gamer Image"
                  width={1464}
                  height={1311}
                  className='mb-[-130px] mt-[-100px] md:w-1/2 xl:mt-[-150px]'               
                />
                <div className='md:mt-[40px]'>
                  <Image
                    src="/img/logo-footer.png"
                    alt="We Spawn logo"
                    width={217}
                    height={69}
                    className='mb-2'
                  />
                  <h1 className='font-ppneuemachina mb-2'>L'ESPORT FAIT SUR MESURE</h1>
                  <p className='font-rnssanz'>
                  L'écosystème qui facilite <b>l'organisation des compétitions d'e-sport</b> pour une immersion professionnelles de tous les joueurs.
                  </p>
                  <button className='bg-[#EAFE52] btn1 hover:bg-[#242629] hover:text-white font-rnssanz font-semibold' ><a href="#savoirplus">En savoir plus</a></button>  
                </div>
              </div>
              <div id='savoirplus' className='flex flex-col md:flex-row-reverse'>                
                <div className='md:mt-[40px] bg-w'>
                  <h2 className='font-ppneuemachina mb-2'>COMMENT ÇA MARCHE ?</h2>
                  <p className='font-rnssanz'>
                  Conçu pour les organisateurs d'évènements e-sportif, La plateforme <b>WESPAWN</b> vous garantie une <b>aide à la gestion</b> de vos compétitions en toute simplicité et une <b>visibilité assurée</b> auprès des joueurs.
                  </p>
                </div>
                <Image
                  src="/img/gamer2.png"
                  alt="Gamer Image"
                  width={1170}
                  height={1363}
                  className='md:w-1/2'             
                />
              </div>
              <div className='mt-[-100px] md:mt-[-200px] lg:mt-[-300px]'>
                <h2 className='font-ppneuemachina'>OUVERTURE DANS</h2>
                <Countdown/>
              </div>
              <div className='min-h-[250px]'>
                <h2 className=' font-ppneuemachina' id='newsletter'>ABONNE TOI À LA NEWSLETTER</h2>
                <NewsletterForm />
              </div>
              <div id='contact'>
                <Footer />
              </div>
        </div>
      </body>
    </main>
  )
}
