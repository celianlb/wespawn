"use client"
import React, { useState } from 'react';

const FormAvis = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState(0);
  const [avis, setAvis] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    setNom('');
    setPrenom('');
    setEmail('');
    setNote(0);
    setAvis('');
  };

  const handleNoteChange = (newNote: number) => {
    setNote(newNote);
  };

  const handleAvisChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAvis(e.target.value);
  };

  


  return (
    <div className="container mx-auto flex">
        <div className="w-full sm:w-7/12">
            <h1 className="text-2xl text-white font-bold mb-4">Formulaire d'avis</h1>
            <form onSubmit={handleSubmit} className="max-w-md ml-150 sm:w-full">
            <div className="mb-4">
            <label htmlFor="nom" className="block font-medium mb-1 text-txt text-white">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="prenom" className="text-white block font-medium text-txt mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-txt text-white block font-medium mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-white block font-medium mb-1 text-txt">Note</label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleNoteChange(value)}
                className={`text-2xl ${
                  value <= note ? 'text-[#DCFF03]' : 'text-gray-400'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          
          <textarea
            id="avis"
            value={avis}
            onChange={handleAvisChange}
            placeholder="Votre message"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-txt"
        >
          Envoyer
        </button>
      </form>
  </div>
  <div className="w-5/12 hidden sm:block ">
    <img src="./img/retour.png" alt="retour avis" className="w-full h-auto" />
    </div>
    </div>    
  );
};

export default FormAvis;
