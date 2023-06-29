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
import Link from "next/link";
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
  const [formattedSort, setFormattedSort] = useState("");
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [capacityFilter, setCapacityFilter] = useState(0);
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleModalOpen = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleContactModalOpen = () => {
    setIsContactModalOpen(true);
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

  const handleBudgetFilterChange = (minPrice: number, maxPrice: number) => {
    setMinPriceFilter(minPrice);
    setMaxPriceFilter(maxPrice);
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

  const budgetFilteredRooms =
    minPriceFilter || maxPriceFilter
      ? capacityFilteredRooms.filter((room) => {
          if (minPriceFilter && maxPriceFilter) {
            return room.price >= minPriceFilter && room.price <= maxPriceFilter;
          } else if (minPriceFilter) {
            return room.price >= minPriceFilter;
          } else if (maxPriceFilter) {
            return room.price <= maxPriceFilter;
          } else {
            return true;
          }
        })
      : capacityFilteredRooms;

  const sortedRooms = budgetFilteredRooms.sort((a, b) => {
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
        <title>Trouvez la salle gaming parfaite - Partout en France</title>
        <meta
          name="description"
          content="Gagner du temps sur votre recherche de salle gaming. Trouvez l&rsquo;endroit parfait pour vos tournois, adapté à votre budget, partout en France. Réalisez vos rêves de compétition avec Wespawn."
        />
      </Head>
      <Header />
      <div className="px-6 mt-12 font-rnssanz md:mt-[72px] md:px-[110px] 2xl:container">
        <div className="mb-6">
          <div className="flex flex-wrap mb-12 gap-2">
            <form className="">
              <input
                id="search icon-search"
                name="search"
                type="search"
                autoComplete="off"
                placeholder="Rechercher une salle"
                className="h-9 w-full md:w-[340px] placeholder-[#787582] font-rnssanz text-txt rounded-[100px] bg-var-grey outline-none py-6 px-6"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            <LocalisationFilter
              onLocationFilterChange={handleLocationFilterChange}
            />
            <CapacityFilter
              onCapacityFilterChange={handleCapacityFilterChange}
            />
            <BudgetFilter onBudgetFilterChange={handleBudgetFilterChange} />
          </div>
          <SortFilters
            sortOption={sortOption}
            onSortOptionChange={handleSortOptionChange}
          />
        </div>

        <div className="flex justify-center items-center">
          <ul className="list-none grid md:grid-cols-2 gap-8 xl:grid-cols-3 md:gap-10">
            {sortedRooms.map((room) => (
              <li key={room._id} className="p-4">
                <img
                  src={urlFor(room.image).url()}
                  className="rounded-lg mb-2 cursor-pointer"
                  width={500}
                  height={374}
                  alt="card"
                  onClick={() => handleModalOpen(room)}
                />
                <div className="flex flex-row mb-4 gap-2">
                  <p className="font-rnssanzbold">{room.title}</p>
                  <p className="text-[#787582]">
                    {room.city}, {room.country}
                  </p>
                  <p className="ml-auto font-rnssanzbold ">{room.price}€</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="rounded-[100px] border-[1px] px-4 py-2 cursor-default">
                    {room.size} m²
                  </p>
                  <div className="rounded-[100px] border-[1px] px-4 py-2 flex flex-row gap-2 cursor-default">
                    <p>x{room.person}</p>
                    <Image
                      src="/img/icon-person.svg"
                      width={10}
                      height={12}
                      alt="icon person"
                    />
                  </div>
                  {room.wifi && (
                    <p className="rounded-[100px] border-[1px] px-4 py-2 cursor-default">
                      {room.wifi}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
      {selectedRoom && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-75">
          <div className="relative">
            <div
              id="card"
              className={`bg-var-black h-[600px] overflow-y-scroll rounded-lg md:w-[676px] ${
                selectedRoom ? "modal-open-animation" : ""
              }`}
            >
              <button
                onClick={() => setSelectedRoom(null)}
                className=" text-white rounded-lg absolute top-2 right-2 mx-4 my-2"
              >
                X
              </button>
              <div>
                <img
                  src={urlFor(selectedRoom.image).url()}
                  alt="room"
                  className="w-screen"
                />
              </div>
              <div className="p-6 text-txt font-rnssanz">
                <h3 className="uppercase font-montserratblack font-bold mb-4">
                  {selectedRoom.title}
                </h3>
                <div className="gap-2 mb-6">
                  <p>{selectedRoom.adresse}</p>
                  <p>{selectedRoom.size} m²</p>
                  <p className="flex flex-row gap-2">
                    {selectedRoom.person}
                    <img
                      src="/img/filters/icon-capacity.svg"
                      width={13}
                      height={13}
                      alt="icon capacity"
                    />
                  </p>
                </div>
                <hr className="mb-6 opacity-20" />
                <div className="mb-6">
                  <p>
                    <span className="font-rnssanzbold">Happy Pony </span>
                    <span className="text-var-pink">•</span> Propriétaire
                  </p>
                </div>
                <hr className="mb-6 opacity-20" />
                <p className="mb-6">{selectedRoom.description}</p>
                <hr className="mb-6 opacity-20" />
                <div className="mb-6"></div>
              </div>
              <div className="p-6 items-center bg-var-grey flex flex-row justify-between">
                <label>{selectedRoom.price}€</label>
                <button
                  className={`uppercase font-rnssanzbold rounded-[100px] py-4 px-6 text-var-grey bg-var-blue ${
                    isContactModalOpen ? "contact-modal-open" : ""
                  }`}
                  onClick={handleContactModalOpen}
                >
                  Contacter la salle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isContactModalOpen && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-75">
          <div className="relative">
            <div
              id="card"
              className="bg-var-black p-4 overflow-y-scroll rounded-lg modal-open-animation"
            >
              <div className="flex flex-row justify-between mb-4">
                <label>Contact :</label>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-white rounded-lg "
                >
                  X
                </button>
              </div>
              <div className="gap-2 flex flex-col text-txt font-rnssanz">
                {selectedRoom?.phone && (
                  <Link
                    className="text-var-blue"
                    href={`tel:${selectedRoom.phone}`}
                  >
                    ☎ {"0" + selectedRoom.phone}
                  </Link>
                )}
                {selectedRoom?.email && (
                  <Link
                    className="text-var-blue"
                    href={`mailto:${selectedRoom.email}`}
                  >
                    ✉ {selectedRoom.email}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
