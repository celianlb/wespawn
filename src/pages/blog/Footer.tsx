import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='grey'>
            <div className='font-rnssanz  py-8 flex flex-col space-y-8 md:flex-row md:py-20 md:gap-10'>
                <div className='md:w-1/3 justify-center flex flex-col gap-4 md:gap-6'>
                    <Image 
                        src= '/img/logo-wespawn.svg'
                        width={138}
                        height={21}
                        alt='WeSpawn Logo'
                    />
                    <p className='text-txt'>L'écosystème qui facilite l'organisation des compétitions esport pour une immersion professionnelles de tous.</p>
                </div>
                <div className='md:w-fit justify-center'>
                    <p className='mb-2 font-rnssanzbold'>Plan du site</p>
                    <ul className='space-y-2 md:space-y-0  md:gap-5 flex flex-col md:flex-row md:flex-wrap'>
                        <li><Link href="/">Outils de gestion</Link></li>
                        <li><Link href="/">Tarifs</Link></li>
                        <li><Link href="/">Actualités</Link></li>
                        <li><Link href="/">Partenaires</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </div>
                <div className='md:w-fit justify-center'>
                    <p className='mb-2 font-rnssanzbold'>Suivez nous sur nos réseaux !</p>
                    <ul className='flex flex-row space-x-8'>
                        <li><Link href="/"><Image src={"/img/insta.svg"} width={30} height={30} alt='Insta'/></Link></li>
                        <li><Link href="/"><Image src={"/img/twitter.svg"} width={30} height={30} alt='Twitter'/></Link></li>
                        <li><Link href="/"><Image src={"/img/discord.svg"} width={30} height={30} alt='Discord'/></Link></li>
                    </ul>
                </div>                                          
            </div>
            <div className=' font-rnssanz pb-8 md:pb-20'>
                <hr className='opacity-20 h-[2px] mb-8' /> 
                <p>© Copyright 2023 | <Link className='underline' href="/">Mentions légales</Link> | Tous droits réservés </p>
            </div> 
        </div>
        
    );
}
