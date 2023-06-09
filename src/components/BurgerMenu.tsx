import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

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
        <Image 
            src= '/img/hamburger-menu.svg'
            width={38}
            height={38}
            alt='WeSpawn Logo'
        />
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
        <div className="flex justify-end pr-8 pt-3 bg-var-black">
          <button className="text-white" onClick={toggleMenu}>
            <FiX size={38}/>
          </button>
        </div>
        <div className=" bg-var-black flex flex-col items-center justify-center h-full pb-10 font-ppneuemachina">
            <Link href="#presentation" className="text-white mb-[56px] " onClick={closeMenu}>
            PRÉSENTATION
            </Link>
            <Link href="#newsletter" className="text-white mb-[56px]" onClick={closeMenu}>
            NEWSLETTER
            </Link>
            <Link href="#contact" className="text-white mb-[56px]" onClick={closeMenu}>
            NOUS CONTACTER
            </Link>
        </div>
      </Transition>

      {/* Style */}
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
      `}</style>
    </div>

      
    );
  };
  
  export default BurgerMenu;