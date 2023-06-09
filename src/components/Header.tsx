import Image from "next/image"
import BurgerMenu from "./BurgerMenu"

export default function Header() {
    return (
      <main>
        <nav>
          <div className="container">
            <div className="flex justify-between items-center p-2.5">
              <Image 
                  src= '/img/logo_wespawn.png'
                  width={38}
                  height={38}
                  alt='WeSpawn Logo'
              />
              <span className="md:hidden"><BurgerMenu/></span>
              <div className="hidden md:flex md:justify-end md:items-center w-full md:w-auto font-ppneuemachina">
                  <a href="#section1" className="text-white mr-8">PRÉSENTATION</a>
                  <a href="#section2" className="text-white mr-8">NEWSLETTER</a>
                  <a href="#section3" className="text-white">NOUS CONTACTER</a>
              </div>
            </div>
          </div>
        </nav>
      </main>
    )
  }