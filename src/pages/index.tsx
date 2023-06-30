import Header from "@/components/Header";
import NewsletterForm from "@/components/Newsletters";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import QuestionComponent from "@/components/Question";
import Head from "next/head";


export default function Home() {
  
  return (
    <main id="bg-tuyau" className="text-white">
      <Head>
        <title>
          Wespawn - Lancez vous dans l&rsquo;organisation de tournoi esport
        </title>
        <meta
          name="description"
          content="Découvrez Wespawn, la plateforme de gestion d&rsquo;évènement esportifs Française, offrant des outils innovants pour une organisation simplifié de vos tournois."
        />
      </Head>
      <div className="ellipse"></div>
      <div className="ellipse2"></div>
      <Header />

      {/*SECTION HERO*/}
      <section className="px-6 md:px-[110px] 2xl:container pt-[55vw] mb-[70px]  md:mb-[14%] md:pt-[120px]">
        <div className=" mt-[93px] justify-end md:mt-0">
          <h1 className="text-h1-mobil md:text-[72px] font-montserratblack mb-6">
            {" "}
            LE JEU <br />
            COMMENCE ICI<span className="text-var-pink">.</span>
          </h1>
          <p className="text-txt mb-8 md:w-[60%]">
            {" "}
            Nous vous offrons les outils et l&rsquo;expertise nécessaires pour
            créer des <b>événements esport uniques</b>, personnalisés à votre
            vision et conçus pour triompher.{" "}
          </p>
          <Link
            href="#decouvrir"
            className="bg-var-grey text-txt-btn-mobil text-left flex font-rnssanzbold w-[149px] px-6 py-4 rounded-[100px] md:w-[173px] md:text-txt-btn-ds"
          >
            JE DÉCOUVRE
            <Image
              className="mt-[3px] pl-1 md:mt-[7px]"
              src="/img/down-arrow.svg"
              width={11}
              height={12}
              alt="Arrow CTA"
            />
          </Link>
        </div>
      </section>

      {/*SECTION DECOUVRIR*/}
      <section id="decouvrir" className="px-6 md:px-[110px] 2xl:container">
        <div className="flex flex-col justify-around items-start md:space-x-10 md:flex md:flex-row">
          <div
            id="bg-triangle"
            className="w-full py-[50px] md:py-[80px] lg:py-[120px]"
          >
            <h2 className="text-h3-mobil flex mb-4 font-montserratblack md:text-h3-ds md:mb-2">
              <img
                src="/img/blue-triangle.svg"
                alt=""
                className="mr-4 w-[18px] md:w-6"
              />
              <span className=" text-var-blue">WE</span>TOOLS
            </h2>
            <p className="text-txt">
              Avec nos outils, gérez efficacement chaque aspect de vos
              compétitions, vous permettant créer des événements inoubliables.
            </p>
          </div>
          <div
            id="bg-square"
            className="w-full py-[50px] md:py-[80px] lg:py-[120px]"
          >
            <h2 className="text-h3-mobil flex mb-4 font-montserratblack md:text-h3-ds md:mb-2">
              <img
                src="/img/pink-square.svg"
                alt=""
                className="mr-4 w-[18px] md:w-6"
              />
              <span className=" text-var-pink">WE</span>COMMUNITY
            </h2>
            <p className="text-txt">
              Rejoignez une communauté de passionnés où les organisateurs et
              joueurs repoussent les limites du virtuel
            </p>
          </div>
          <div
            id="bg-circle"
            className="w-full py-[50px] md:py-[80px] lg:py-[120px]"
          >
            <h2 className="text-h3-mobil flex mb-4 font-montserratblack md:text-h3-ds md:mb-2">
              <img
                src="/img/circle-yellow.svg"
                alt=""
                className="mr-4 w-[18px] md:w-6"
              />
              <span className=" text-var-yellow">WE</span>SPAWN
            </h2>
            <p className="text-txt">
              Nous prenons au sérieux votre travail et tous les acteurs de
              l&rsquo;esport.
            </p>
          </div>
        </div>
      </section>

      <section
        id="wetools"
        className="px-6 mb-24 md:mb-[120px] md:px-[110px] 2xl:container "
      >
        <div className="mt-[96px]">
          <div className=" mb-8 md:mb-16">
            <p className="westroke font-montserratblack mb-[-50px] md:mb-[-75px] xl:mb-[-80px]">
              WETOOLS
            </p>
            <h2 className="text-h2-mobil font-montserratblack mb-10 md:mb-4 md:text-h2-ds">
              RECHERCHE DE SALLE
            </h2>
            <p className="text-txt font-rnssanz">
              Trouvez la salle parfaite pour vos compétitions d&rsquo;esport.
              Simplifiez votre processus de planification en découvrant des
              espaces idéaux pour les joueurs.
            </p>
          </div>

          <div className="lg:flex lg:flex-row">
            {/*CARD SALLE*/}
            <div className="w-full lg:mr-20 lg:w-2/3">
              <div className="rounded-lg bg-var-grey">
                <Image
                  className="w-full"
                  width={740}
                  height={374}
                  src="/img/card-img.svg"
                  alt="Card Chair Img"
                />
                <div className="font-rnssanz text-txt-xs md:text-txt flex flex-row py-4 px-4 md:py-10 md:px-[54px] justify-between">
                  <div>
                    <p>
                      Bootcamp Gaming
                      <br />
                      22 Rue Pozzo di Borgo, Saint Cloud, France
                    </p>
                    <Link
                      href="/annuaire/#esportbox"
                      className="w-fit underline flex mt-4 text-var-blue"
                    >
                      {" "}
                      Voir la salle
                      <Image
                        className="mt-1 pl-1 md:mt-2"
                        src="/img/blue-arrow.svg"
                        width={11}
                        height={12}
                        alt="Arrow CTA"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between pl-6">
                    <span className="flex flex-row">
                      <Image
                        className="mr-3"
                        src="/img/icon-superficie.svg"
                        width={24}
                        height={24}
                        alt="Superficies Icon"
                      />
                      70 m²
                    </span>
                    <span className="flex flex-row">
                      <Image
                        className="mr-3"
                        src="/img/icon-wifi.svg"
                        width={24}
                        height={24}
                        alt="Wifi Icon"
                      />
                      WIFI
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/annuaire"
                className="uppercase w-fit mt-6 mb-[54px] bg-var-grey text-txt-btn-mobil text-left flex font-rnssanzbold px-6 py-4 rounded-[100px] md:mt-[72px] md:text-txt-btn-ds"
              >
                Voir toutes les salles
                <Image
                  className="mt-[3px] pl-1 md:mt-[7px]"
                  src="/img/blue-arrow.svg"
                  width={11}
                  height={12}
                  alt="Arrow CTA"
                />
              </Link>
            </div>

            {/*FONCTIONNALITÉS ROADMAP*/}
            <aside className="w-full lg:w-1/3">
              {/*FN 1*/}
              <div
                id="bg-lock"
                className="opacity-[65%] rounded-lg px-8 py-6 md:py-8 space-y-6 cursor-not-allowed"
              >
                <h3 className="text-h3-mobil md:text-h3-mobil font-montserratblack mb-4">
                  ESPACE PRO
                </h3>
                <p className="font-rnssanz text-txt">
                  Planifiez vos tournois et vos dates clés à l&rsquo;avance dans
                  un agenda collaboratifs et intuitif.
                </p>
                <p className="w-fit underline font-rnssanz flex mt-4 text-txt text-var-blue">
                  Découvrir
                  <Image
                    className="w-fit mt-1 pl-1"
                    src="/img/blue-arrow.svg"
                    width={11}
                    height={12}
                    alt="Arrow CTA"
                  />
                </p>
              </div>
              {/*FN 2*/}
              <div
                id="bg-lock"
                className="opacity-[65%] bg-var-grey rounded-lg px-8 py-6 md:py-8 mt-[54px] space-y-6 cursor-not-allowed"
              >
                <h3 className="text-h3-mobil md:text-h3-mobil font-montserratblack mb-4">
                  BILLETERIE EN LIGNE
                </h3>
                <p className="font-rnssanz text-txt">
                  Gérez la vente de vos billets facilement et renforcez votre
                  communauté.
                </p>
                <p className="w-fit underline font-rnssanz flex mt-4 text-txt text-var-blue">
                  Découvrir
                  <Image
                    className="w-fit mt-1 pl-1"
                    src="/img/blue-arrow.svg"
                    width={11}
                    height={12}
                    alt="Arrow CTA"
                  />
                </p>
              </div>
              {/*FN 3*/}
              <div
                id="bg-lock"
                className="opacity-[65%] bg-var-grey rounded-lg px-8 py-6 md:py-8 mt-[54px] space-y-6 cursor-not-allowed"
              >
                <h3 className="text-h3-mobil md:text-h3-mobil font-montserratblack mb-4">
                  SUIVIE DES PERF
                </h3>
                <p className="font-rnssanz text-txt">
                  Grâce à notre tableau de bord intuitif, suivez aisément vos
                  performances ainsi que celles de vos joueurs.
                </p>
                <p className="w-fit underline font-rnssanz flex mt-4 text-txt text-var-blue">
                  Découvrir
                  <Image
                    className="w-fit mt-1 pl-1"
                    src="/img/blue-arrow.svg"
                    width={11}
                    height={12}
                    alt="Arrow CTA"
                  />
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/*AVIS DACH*/}
      <section className="px-6 md:px-[110px] 2xl:container ">
        <aside className="mb-24 md:mb-[120px]">
          <div className="mb-8 md:mb-16">
            <p className="westroke uppercase font-montserratblack mb-[-50px] md:mb-[-75px] xl:mb-[-80px]">
              SUCCESS STORY
            </p>
            <h2 className="text-h2-mobil uppercase font-montserratblack mb-10 md:mb-4 md:text-h2-ds">
              Dach soutient notre projet
            </h2>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <Image
              className="md:w-1/3"
              src={"/img/dach.svg"}
              width={453}
              height={424}
              alt="DACH"
            />
            <div>
              <p className="text-txt font-rnssanz mb-6 md:text-[24px]">
                Il y a un <b>énorme intérêt</b> de passer par <b>Wespawn</b>.
                Des projets régionaux et locaux s&rsquo;ouvrent partout. Wespawn
                peut clairement <b>répondre à un besoin</b> de plein de gens qui
                débutent.
              </p>
              <p className=" text-txt font-rnssanz flex gap-2">
                <Image
                  src={"/img/icon-twitch-dach.svg"}
                  width={21}
                  height={24}
                  alt="icon twitch dach"
                />
                Dach
              </p>
              <Link
                href="/"
                className="uppercase w-fit mt-6 mb-[54px] bg-var-grey text-txt-btn-mobil text-left flex font-rnssanzbold px-6 py-4 rounded-[100px] md:mt-[72px] md:text-txt-btn-ds"
              >
                Lire l&rsquo;article
                <Image
                  className="mt-[3px] pl-1 md:mt-[7px]"
                  src="/img/blue-arrow.svg"
                  width={11}
                  height={12}
                  alt="Arrow CTA"
                />
              </Link>
            </div>
          </div>
        </aside>
      </section>

      {/*VIDEO MOTION DESIGN*/}
      <section className="px-6 md:px-[110px] 2xl:container ">
        <div className="mb-24 md:mb-[120px]">
          <iframe
            className="w-full h-[190px] md:h-[575px]"
            src="https://www.youtube.com/embed/87SPn5DmXmc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>

      {/*Partenaire*/}
      <section className="px-6 md:px-[110px] 2xl:container ">
        <div className="mb-24 md:mb-[120px]">
          <Carousel />
        </div>
      </section>

      {/*ACTU*/}
      <section className="px-6 md:px-[110px] 2xl:container ">
        <aside className="mb-24 flex flex-col gap-24 md:gap-6 md:flex-row md:mb-[120px]">
          <div className="md:w-1/2 bg-var-grey rounded-lg p-8 md:p-10">
            <h3 className="uppercase text-h3-mobil font-montserratblack mb-2 md:mb-4 md:text-h3-ds">
              Nom de l&rsquo;article
            </h3>
            <p className="mb-4 md:mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem eaque distinctio voluptatibus sapiente repellat. Quod,
              velit ducimus optio sequi voluptas et provident in expedita porro
              voluptate, cupiditate excepturi soluta ea.
            </p>
            <Link href="/" className=" text-txt font-rnssanz flex flex-row">
              Lire la suite
              <Image
                className="w-fit mt-1 pl-1"
                src="/img/blue-arrow.svg"
                width={11}
                height={12}
                alt="Arrow CTA"
              />
            </Link>
          </div>
          <div className="md:w-1/2 border-var-grey border-2 rounded-lg p-8 md:p-10">
            <h3 className="uppercase text-h3-mobil font-montserratblack mb-6 md:mb-4 md:text-h3-ds">
              Newsletter
            </h3>
            <NewsletterForm />
          </div>
        </aside>
      </section>

      {/*ACTU*/}
      <section className="px-6 md:px-[110px] 2xl:container ">
        <aside className="mb-24 gap-24 md:flex-row md:mb-[120px]">
          <QuestionComponent />
        </aside>
      </section>

      {/*FOOTER*/}
      <section>
        <div className="mb-[-30px]">
          <Footer />
        </div>
      </section>
    </main>
  );
}
