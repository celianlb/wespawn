import React, { useState } from "react";

type SortFiltersProps = {
  sortOption: string;
  onSortOptionChange: (option: string) => void;
};

const SortFilters: React.FC<SortFiltersProps> = ({
  sortOption,
  onSortOptionChange,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formattedSort, setFormattedSort] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const handleResetSelection = () => {
    setSelectedSortOption("");
    setFormattedSort("");
  };

  const handleOpenSortModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSortOptionChange = (option: string) => {
    setSelectedSortOption(option);
    setFormattedSort(option.charAt(0).toUpperCase() + option.slice(1));
  };

  const handleApplyFilter = () => {
    onSortOptionChange(selectedSortOption);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="w-fit">
        <button
          className="uppercase font-rnssanzbold flex flex-row p-4 items-center bg-var-grey rounded-[100px] gap-2"
          onClick={handleOpenSortModal}
        >
          {formattedSort !== "" ? formattedSort : "Trier"}
          <img
            src="/img/filters/icon-sort.svg"
            width={10}
            height={13}
            alt="icon sort"
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
            <div className="flex flex-row justify-between mb-8 md:mb-14">
              <button className="uppercase text-h3-mobil md:text-h3-ds font-montserratblack flex flex-row items-center gap-2">
                Trier
                <img
                  src="/img/filters/icon-sort.svg"
                  width={10}
                  height={13}
                  alt="icon sort"
                />
              </button>
              <button
                onClick={handleCloseModal}
                className="font-montserratblack"
              >
                X
              </button>
            </div>
            <div className="flex flex-row justify-between sort-option mb-[26px]">
              <label>Prix croissant</label>
              <input
                className=""
                type="radio"
                name="sort-option"
                value="price-asc"
                checked={selectedSortOption === "PRIX CROISSANT"}
                onChange={() => handleSortOptionChange("PRIX CROISSANT")}
              />
            </div>
            <hr className="bg-var-grey border-none mb-[26px] h-[2px]" />
            <div className="flex flex-row justify-between sort-option mb-[26px]">
              <label>Prix décroissant</label>
              <input
                type="radio"
                name="sort-option"
                value="price-desc"
                checked={selectedSortOption === "PRIX DECROISSANT"}
                onChange={() => handleSortOptionChange("PRIX DECROISSANT")}
              />
            </div>
            <hr className="bg-var-grey border-none mb-[26px] h-[2px]" />
            <div className="flex flex-row justify-between sort-option mb-[26px]">
              <label>Superficie croissante</label>
              <input
                type="radio"
                name="sort-option"
                value="size-asc"
                checked={selectedSortOption === "SUPERFICIE CROISSANT"}
                onChange={() => handleSortOptionChange("SUPERFICIE CROISSANT")}
              />
            </div>
            <hr className="bg-var-grey border-none mb-[26px] h-[2px]" />
            <div className="flex flex-row justify-between md:mb-14 sort-option mb-[26px]">
              <label>Superficie décroissante</label>
              <input
                type="radio"
                name="sort-option"
                value="size-desc"
                checked={selectedSortOption === "SUPERFICIE DECROISSANT"}
                onChange={() =>
                  handleSortOptionChange("SUPERFICIE DECROISSANT")
                }
              />
            </div>
            <div className="flex flex-row justify-between text-txt">
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

export default SortFilters;
