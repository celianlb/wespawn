import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Dach = () => {
  return (
    <section className=' 2xl:container '>
        <aside className='mb-24 md:mb-[120px]'>
          <div className='mb-8 md:mb-16'>
            <p className='westroke uppercase font-montserratblack mb-[-50px] md:mb-[-75px] xl:mb-[-80px]'>SUCCESS STORY</p>
            <h2 className='text-h2-mobil uppercase font-montserratblack mb-10 md:mb-4 md:text-h2-ds text-white'>Dach soutient notre projet</h2>
          </div>
          <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
            <Image className='md:w-1/3' src={"/img/dach.svg"} width={453} height={424} alt='DACH' />
            <div>
              <p className='text-txt font-rnssanz mb-6 md:text-[24px] text-white'>Il y a un <b>énorme intérêt</b> de passer par <b>Wespawn</b>. Des projets régionaux et locaux s'ouvrent partout. Wespawn peut clairement <b>répondre à un besoin</b> de plein de gens qui débutent.</p>
              <p className=' text-txt font-rnssanz flex gap-2 text-white'>
                <Image src={"/img/icon-twitch-dach.svg"} width={21} height={24} alt='icon twitch dach' />
                Dach
              </p>
              <Link href="/" className="text-white uppercase w-fit mt-6 mb-[54px] bg-var-grey text-txt-btn-mobil text-left flex font-rnssanzbold px-6 py-4 rounded-[100px] md:mt-[72px] md:text-txt-btn-ds"> 
                  Lire l'article 
                  <Image className="mt-[3px] pl-1 md:mt-[7px]" src='/img/blue-arrow.svg' width={11} height={12} alt='Arrow CTA' />
              </Link> 
            </div>
          </div>
        </aside>        
      </section>
  );
};

export default Dach;
