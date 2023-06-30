import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

export default function Header() {
  return (
    <main>
      <nav className="px-6 md:px-[110px] 2xl:container">
        <div className="flex justify-between items-center mt-3">
          <Link href="/">
            <Image
              src="/img/logo-wespawn.svg"
              width={138}
              height={21}
              alt="WeSpawn Logo"
            />
          </Link>
          <span className="lg:hidden">
            <BurgerMenu />
          </span>
          <div className="hidden font-rnssanzbold space-x-6 lg:flex lg:items-center">
            <Link href="/annuaire" className="text-white">
              TROUVER UNE SALLE
            </Link>
            <Link href="/blog" className="text-white">
              ACTUALITÉS
            </Link>
            <Link href="/avis" className="text-white">
              CONTACT
            </Link>
          </div>
          <Link
            href="/auth/login"
            className="bg-var-blue font-rnssanzbold hidden lg:flex px-[24px] py-[16px] rounded-[100px] text-var-grey"
          >
            JE SUIS ORGANISATEUR
            <div className="mt-[6px] pl-1">
              <Image
                src="/img/arrow-cta.svg"
                width={11}
                height={12}
                alt="Arrow CTA"
              />
            </div>
          </Link>
        </div>
      </nav>
    </main>
  );
}
