import Image from "next/image"
import style from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <main>
            <footer className="bg-var-black mb-8">
                <Image 
                src= '/img/logo-footer.png'
                width={187}
                height={60}
                alt='WeSpawn Logo Footer'
                className='mb-4'                
                />
                <ul className="font-rnssanz">
                    <li className='mb-4' ><a href="#presentation">Présentation</a></li>
                    <li className='mb-4' ><a href="#savoirplus">En savoir plus</a></li>
                    <li className='mb-8' ><a href="#newsletter">S'abonner à la Newsletter</a></li>
                </ul>
                <hr />
                <ul className="flex mt-8 mb-10">
                    <li className="mr-4"><a target="_blank" href="https://www.instagram.com/wespawn.fr/">
                            <Image
                            src='/img/insta.png'
                            width={30}
                            height={30}
                            alt='insta Logo'
                            />
                        </a>
                    </li>
                    <li className="mr-4"><a target="_blank" href="https://twitter.com/wespawn_fr">
                            <Image
                            src='/img/twitter.png'
                            width={30}
                            height={30}
                            alt='Twitch Logo'
                            />
                        </a>
                    </li>                    
                    <li className="mr-4"><a target="_blank" href="https://discord.gg/WjtPvnvR">
                            <Image
                            src='/img/discord.png'
                            width={30}
                            height={30}
                            alt='discord Logo'
                            />
                        </a>
                    </li>                    
                </ul>
                <span className="text-[12px] opacity-50">© Copyright 2023 | Mentions légales | Tous droits réservés</span>
            </footer>
        </main>
    )
}
        
        