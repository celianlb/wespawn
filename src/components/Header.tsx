import Image from "next/image"
import BurgerMenu from "./BurgerMenu"
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
      <main>
        <div className="container">
        <div className={styles.header}>
        <Image 
            src= '/img/logo_wespawn.png'
            width={38}
            height={38}
            alt='WeSpawn Logo'
        />
        <BurgerMenu />
        </div>
        

        </div>
        
      </main>
    )
  }