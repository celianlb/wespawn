import Image from "next/image"
import style from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <main>
            <footer className="bg-black-spec mb-8">
                <Image 
                src= '/img/logo-footer.png'
                width={187}
                height={60}
                alt='WeSpawn Logo Footer'
                className='mb-4'                
                />
                <ul>
                    <li className='mb-4' ><a href="#section1">Présentation</a></li>
                    <li className='mb-4' ><a href="#section2">En savoir plus</a></li>
                    <li className='mb-8' ><a href="#section3">S'abonner à la Newsletter</a></li>
                </ul>
                <hr />
                <ul className="flex mt-8 mb-10">
                    <li className="mr-4"><a href="https://twitter.com/wespawn_fr">
                            <Image
                            src='/img/twitch.png'
                            width={30}
                            height={30}
                            alt='Twitch Logo'
                            />
                        </a>
                    </li>
                    <li className="mr-4"><a href="https://www.instagram.com/wespawn.fr/">
                            <Image
                            src='/img/insta.png'
                            width={30}
                            height={30}
                            alt='insta Logo'
                            />
                        </a>
                    </li>
                    <li className="mr-4"><a href="">
                            <Image
                            src='/img/linkedin.png'
                            width={30}
                            height={30}
                            alt='linkedin Logo'
                            />
                        </a>
                    </li>
                    <li className="mr-4"><a href="https://discord.gg/WjtPvnvR">
                            <Image
                            src='/img/discord.png'
                            width={30}
                            height={30}
                            alt='discord Logo'
                            />
                        </a>
                    </li>                    
                </ul>
                <span className="text-[12px] opacity-50">Copyright 2023 | Mentions légales | Tous droits réservés</span>
            </footer>
        </main>
    )
}
        
        