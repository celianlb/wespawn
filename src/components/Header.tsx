import Image from "next/image"
import BurgerMenu from "./BurgerMenu"
import Link from "next/link"

export default function Header() {
    return (
      <main>
        <nav>
          <div className="container">
            <div className="flex justify-between items-center mt-5">
              <Link href="/">
                <Image 
                    src= '/img/logo_wespawn.png'
                    width={38}
                    height={38}
                    alt='WeSpawn Logo'
                />
              </Link>              
              <span className="md:hidden"><BurgerMenu/></span>
              <div className="hidden md:flex md:justify-end md:items-center w-full md:w-auto font-ppneuemachina">
                  <a href="#presentation" className="text-white mr-8 hover:text-var-yellow">PRÉSENTATION</a>
                  <a href="#newsletter" className="text-white mr-8 hover:text-var-yellow">NEWSLETTER</a>
                  <a href="#contact" className="text-white bg-[#1F2526] p-5 rounded-[86px] hover:text-var-yellow">NOUS CONTACTER</a>
              </div>
            </div>
          </div>
        </nav>
      </main>
    )
  }