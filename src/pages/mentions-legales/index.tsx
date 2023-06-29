import React, { useState } from "react";
import { Room } from "../../../typings";
import { GetStaticProps } from "next";
import { fetchAllRoom } from "@/utils/fetchRoom";
import { urlFor } from "@/sanity";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import SortFilters from "@/components/SortFilters";
import LocalisationFilter from "@/components/LocalisationFilter";
import CapacityFilter from "@/components/CapacityFilter";
import BudgetFilter from "@/components/BudgetFilter";
import Head from "next/head";

type Props = {
  rooms: Room[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const rooms: Room[] = await fetchAllRoom();

  return {
    props: {
      rooms,
    },
    revalidate: 10,
  };
};

export default function Annuaire({ rooms }: Props) {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [showSortModal, setShowSortModal] = useState(false);
  const [formattedSort, setFormattedSort] = useState("");
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [capacityFilter, setCapacityFilter] = useState(0);

  const handleCloseSortModal = () => {
    setShowSortModal(false);
  };

  const handleSortOptionChange = (option: string) => {
    setSortOption(option);
    setFormattedSort(option.charAt(0).toUpperCase() + option.slice(1));
  };

  const handleLocationFilterChange = (city: string) => {
    setSearchCity(city);
  };

  const handleCapacityFilterChange = (capacity: number) => {
    setCapacityFilter(capacity);
  };

  const filteredRooms = isSearchEnabled
    ? rooms.filter((room) => {
        return (
          search.toLowerCase() === "" ||
          room.title.toLowerCase().includes(search.toLowerCase())
        );
      })
    : rooms;

  const locationFilteredRooms = searchCity
    ? filteredRooms.filter((room) => {
        return room.city.toLowerCase() === searchCity.toLowerCase();
      })
    : filteredRooms;

  const capacityFilteredRooms = capacityFilter
    ? locationFilteredRooms.filter((room) => {
        return room.person >= capacityFilter;
      })
    : locationFilteredRooms;

  const sortedRooms = capacityFilteredRooms.sort((a, b) => {
    if (sortOption === "PRIX CROISSANT") {
      return a.price - b.price;
    } else if (sortOption === "PRIX DECROISSANT") {
      return b.price - a.price;
    } else if (sortOption === "SUPERFICIE CROISSANT") {
      return a.size - b.size;
    } else if (sortOption === "SUPERFICIE DECROISSANT") {
      return b.size - a.size;
    } else {
      return 0;
    }
  });

  return (
    <div className="text-white">
      <Head>
        <title>Mentions légales - Wespawn</title>
        <meta
          name="description"
          content="Consultez nos mentions légales pour en savoir plus sur nos politiques et nos engagements."
        />
      </Head>

      <Header />
      <div className="flex flex-col px-6 mt-12 mb-24 md:mb-[120px]  md:mt-[72px] xl:px-[327px] 2xl:container">
        <h1 className="uppercase md:text-center text-h1-mobil md:text-h1-ds font-montserratblack ">
          Mentions légales
        </h1>
        <p className="text-center mb-24 md:mb-[120px]">
          Dernière mise à jour le 21 juin 2023{" "}
        </p>
        <div className="text-txt mb-10 md:mb-16">
          <h2 className="uppercase mb-6 font-montserratblack text-h2-mobil md:mb-8 md:text-h2-ds">
            Qui sommes-nous ?
          </h2>
          <p className="mb-4">
            Le site wespawn.fr est la propriété exclusive de Beselga Proenca
            Erin.
          </p>
          <p>
            WE SPAWN est une plateforme SaaS qui facilite l&rsquo;organisation
            des compétitions e-sport pour une immersion professionnelle de tous
            les joueurs.
          </p>
        </div>
        <div className="text-txt mb-10 md:mb-16">
          <h2 className="uppercase mb-6 font-montserratblack text-h2-mobil md:mb-8 md:text-h2-ds">
            directrice de la publication
          </h2>
          <p className="mb-4">Beselga Proenca Erin.</p>
        </div>
        <div className="text-txt mb-10 md:mb-16">
          <h2 className="uppercase mb-6 font-montserratblack text-h2-mobil md:mb-8 md:text-h2-ds">
            hébergement
          </h2>
          <p className="mb-4">
            Le site internet est hébergé par Vercel Inc 440 N Barranca Ave
            #4133Covina, CA 91723 dont le siège social se situe à San Francisco
            en Californie au sein des Etats-Unis (email : privacy@vercel.com ).
          </p>
        </div>
        <div className="text-txt mb-10 md:mb-16">
          <h2 className="uppercase mb-6 font-montserratblack text-h2-mobil md:mb-8 md:text-h2-ds">
            nous contacter
          </h2>
          <ul className="mb-4 list-disc">
            <li>Par téléphone : 0781730838</li>
            <li>Par email : stellar.webagence@gmail.com</li>
            <li>
              Par courrier : 8 bis Rue de la Fontaine au Roi, 75011 Paris,
              France
            </li>
          </ul>
          <p>
            Vous disposez d&rsquo;un droit d&rsquo;accès à vos données à
            caractère personnel, ainsi que le droit de demander la rectification
            ou l&rsquo;effacement de ces dernières. Vous disposez également du
            droit de vous opposer au traitement de ces données ou de limiter ce
            dernier par email à l&rsquo;adresse stellar.webagence@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
