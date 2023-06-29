import React, { useState, useEffect } from "react";


type LocalisationFilterProps = {
  onLocationFilterChange: (location: string) => void;
};

const LocalisationFilter: React.FC<LocalisationFilterProps> = ({
  onLocationFilterChange,
}) => {
  const [locationFilter, setLocationFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formattedCity, setFormattedCity] = useState("");

  const predefinedCities = ["Paris", "Lyon", "Bordeaux", "Nantes", "Rennes"];

  const handleResetSelection = () => {
    setFormattedCity("");
    setLocationFilter("");
  };

  const handleOpenSortModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseSortModal = () => {
    setIsModalOpen(false);
  };

  const handleLocationFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const location = event.target.value;
    setLocationFilter(location);
  };

  const handleCitySelection = (city: string) => {
    setLocationFilter(city);
  };

  const handleApplyFilter = () => {
    setFormattedCity(locationFilter);
    onLocationFilterChange(locationFilter);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="w-fit">
        <button
          className="uppercase font-rnssanzbold flex flex-row px-6 py-4 items-center bg-var-grey rounded-[100px] gap-2"
          onClick={handleOpenSortModal}
        >
          {formattedCity !== "" ? formattedCity : "Localisation"}
          <img
            src="/img/filters/icon-localisation.svg"
            width={10}
            height={13}
            alt="icon location"
          />
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div
            className={`bg-var-black rounded-lg items-center bottom-0 fixed mb-0 w-full p-8 gap-4 font-rnssanzbold md:relative md:w-[676px] ${
              isModalOpen ? "modal-open-animation" : ""
            }`}
          >
            <div className="flex flex-row justify-between mb-8 md:mb-10">
              <button className="uppercase text-h3-mobil md:text-h3-ds font-montserratblack flex flex-row items-center gap-2">
                LOCALISATION
                <img
                  src="/img/filters/icon-localisation.svg"
                  width={10}
                  height={13}
                  alt="icon sort"
                />
              </button>
              <button
                onClick={handleCloseSortModal}
                className="font-montserratblack"
              >
                X
              </button>
            </div>
            <input
              type="text"
              placeholder="Rechercher une ville"
              className="h-9 w-full mb-9 placeholder-[#787582] font-rnssanz text-txt rounded-[8px] bg-var-grey outline-none py-6 px-6"
              value={locationFilter}
              onChange={handleLocationFilterChange}
            />

            <div className="flex flex-col">
              {predefinedCities.map((city, index) => (
                <div key={index}>
                  <div className="flex flex-row justify-between sort-option mb-[26px]">
                    <label key={city}>{city}</label>
                    <input
                      type="radio"
                      className="form-checkbox text-var-blue"
                      value={city}
                      checked={locationFilter === city}
                      onChange={() => handleCitySelection(city)}
                    />
                  </div>
                  {index !== predefinedCities.length - 1 && (
                    <hr className="bg-var-grey border-none mb-[26px] h-[2px]" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-between text-txt mt-4">
              <button
                className="uppercase text-var-blue"
                onClick={handleResetSelection}
              >
                Effacer
              </button>
              <button
                className="uppercase text-var-grey bg-var-blue px-6 py-4 rounded-[100px]"
                onClick={handleApplyFilter}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalisationFilter;
