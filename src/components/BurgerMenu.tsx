import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Transition } from '@headlessui/react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="burgerMenu" onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-300 ease-out"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition duration-300 ease-out"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
        className="fixed inset-0 bg-black-spec z-50"
      >
        <div className="flex justify-end pr-4">
          <button className="text-white " onClick={toggleMenu}>
            <FiX size={50}/>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full pb-10">
          <a href="#section1" className="text-white mb-[56px]" onClick={closeMenu}>
            PRÉSENTATION
          </a>
          <a href="#section2" className="text-white mb-[56px]" onClick={closeMenu}>
            NEWSLETTER
          </a>
          <a href="#section3" className="text-white mb-[56px]" onClick={closeMenu}>
            NOUS CONTACTER
          </a>
          {/* Ajoute ici les autres redirections */}
        </div>
      </Transition>
      <style jsx>{`
      .burgerMenu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 33px;
        height: 35px;
        cursor: pointer;
        
      }
      
      .line {
        width: 33px;
        height: 19px;
        background-color: white;
        margin-bottom: 9px;
        border-radius: 100px;
      }
      
      .line:first-child {
        width: 33px;
      }
      
      .line:nth-child(2) {
        width: 22.5px;
      }
      
      .line:last-child {
        width: 13.5px;
      }
    

      `}</style>
    </div>

      
    );
  };
  
  export default BurgerMenu;
  