import React, { useState } from "react";

type CapacityFilterProps = {
  onCapacityFilterChange: (person: number) => void;
};

const CapacityFilter: React.FC<CapacityFilterProps> = ({
  onCapacityFilterChange,
}) => {
  const [personFilter, setPersonFilter] = useState<number | null>(null);
  const [person, setPerson] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResetSelection = () => {
    setPersonFilter(0);
    setPerson(0);
  };

  const handleOpenCapacityModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseCapacityModal = () => {
    setIsModalOpen(false);
  };

  const handleCapacityChange = (value: number) => {
    setPersonFilter(value);
    setPerson(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 2000) {
      setPersonFilter(value);
      setPerson(value);
    }
  };

  const handleApplyFilter = () => {
    if (personFilter !== null) {
      onCapacityFilterChange(personFilter);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="w-fit">
        <button
          className="uppercase font-rnssanzbold flex flex-row px-6 py-4 items-center bg-var-grey rounded-[100px] gap-2"
          onClick={handleOpenCapacityModal}
        >
          {personFilter !== null && personFilter !== 0
            ? `${personFilter}`
            : "Capacité"}
          <img
            src="/img/filters/icon-capacity.svg"
            width={10}
            height={13}
            alt="icon capacity"
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
                Capacité
                <img
                  src="/img/filters/icon-capacity.svg"
                  width={13}
                  height={13}
                  alt="icon capacity"
                />
              </button>
              <button
                onClick={handleCloseCapacityModal}
                className="font-montserratblack"
              >
                X
              </button>
            </div>

            <div className="">
              <p className="mb-8 ">Nombre de personnes :</p>
              <div className="flex flex-col items-center mb-9 ">
                <div className="mb-8 flex flex-col items-center rounded-[3px] border-2 border-var-grey w-full md:w-[342px] py-3 gap-2">
                  <p className=" text-txt-btn-ds font-rnssanzbold">
                    Capacité minimum
                  </p>
                  <input
                    pattern="[0-9]*"
                    inputMode="numeric"
                    type="text"
                    min={0}
                    max={1000}
                    value={personFilter !== null ? personFilter.toString() : ""}
                    onChange={handleInputChange}
                    className="w-20 px-2 py-1 outline-none rounded-lg bg-var-black mr-2 text-center"
                  />
                </div>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  value={person}
                  onChange={(e) => handleCapacityChange(Number(e.target.value))}
                  className="w-full md:w-[342px]"
                  step={10}
                />
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
        </div>
      )}
    </div>
  );
};

export default CapacityFilter;
