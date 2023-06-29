import React, { useState } from "react";

type BudgetFilterProps = {
  onBudgetFilterChange: (minPrice: number, maxPrice: number) => void;
};

const BudgetFilter: React.FC<BudgetFilterProps> = ({
  onBudgetFilterChange,
}) => {
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("5000");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState<string>("Budget");


  const handleOpenBudgetModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseBudgetModal = () => {
    setIsModalOpen(false);
  };

  const handleApplyFilter = () => {
    const newMinPrice = minPrice !== "" ? parseInt(minPrice) : 0;
    const newMaxPrice = maxPrice !== "" ? parseInt(maxPrice) : 5000;
    onBudgetFilterChange(newMinPrice, newMaxPrice);
    setIsModalOpen(false);
    
    if (newMinPrice === 0 && newMaxPrice === 5000) {
      setButtonText("Budget");
    } else {
      setButtonText(`${newMinPrice}€ - ${newMaxPrice}€`);
    }
  };
  

  return (
    <div>
      <div className="w-fit">
        <button
          className="uppercase font-rnssanzbold flex flex-row px-6 py-4 items-center bg-var-grey rounded-[100px] gap-2"
          onClick={handleOpenBudgetModal}
        >
          {buttonText}
          <img
            src="/img/filters/icon-budget.svg"
            width={10}
            height={13}
            alt="icon budget"
          />
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`bg-var-black rounded-lg items-center bottom-0 fixed mb-0 w-full p-8 gap-4 font-rnssanzbold md:relative md:w-[676px] ${
              isModalOpen ? "modal-open-animation" : ""
            }`}>
            <div className="flex flex-row justify-between mb-8 md:mb-10">
              <button className="uppercase text-h3-mobil md:text-h3-ds font-montserratblack flex flex-row items-center gap-2">
                Budget
                <img
                  src="/img/filters/icon-budget.svg"
                  width={13}
                  height={13}
                  alt="icon budget"
                />
              </button>
              <button
                onClick={handleCloseBudgetModal}
                className="font-montserratblack"
              >
                X
              </button>
            </div>

            <div className="">
              <p className="mb-8 ml-20">Fourchette de prix :</p>
              <div className="flex flex-row justify-center gap-4">
                <div className="rounded-[3px] w-1/2  border-2 border-var-grey px-4 py-3 md:w-[200px]">
                  <p className=" text-txt-btn-ds font-rnssanzbold mb-2">
                    Prix minimum
                  </p>
                  <input
                    pattern="[0-9]*"
                    inputMode="numeric"
                    type="text"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-20 px-2 py-1 outline-none rounded-lg bg-var-black mr-2 text-center"
                  />
                  €
                </div>
                <img src="/img/line.svg" alt="" />
                <div className="rounded-[3px] w-1/2  border-2 border-var-grey px-4 py-3 md:w-[200px]">
                  <p className=" text-txt-btn-ds font-rnssanzbold mb-2">
                    Prix maximum
                  </p>
                  <input
                    pattern="[0-9]*"
                    inputMode="numeric"
                    type="text"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-20 px-2 py-1 outline-none rounded-lg bg-var-black mr-2 text-center"
                  />
                  €
                </div>
              </div>
              <div className="flex flex-row justify-between text-txt mt-4">
                <button
                  className="uppercase text-var-blue"
                  onClick={() => {
                    setMinPrice("0");
                    setMaxPrice("5000");
                  }}
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

export default BudgetFilter;
