import React from 'react';

const Newsletter = () => {
  return (
    <div className="desktop:w-1/2 desktop:sticky desktop:left-0 mobile:w-full mt-20">
      <div className="w-full md:w-1/2 bg-transparent border-2 border-white p-4 rounded-md">
        <h1 className="text-white text-2xl font-bold mb-4">Inscrivez-vous à notre newsletter</h1>
        <form className="flex">
          <input
            type="email"
            className="w-full px-4 py-2 rounded-l border border-white bg-white text-gray-800 mr-2"
            placeholder="Entrez votre adresse e-mail"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-teal-400 text-white rounded-r"
          >
            S'abonner
          </button>
        </form>
        <div className="mt-4 flex items-start">
          <input
            type="checkbox"
            className="mt-1 mr-2"
          />
          <p className="text-white text-sm">
            En vous inscrivant à notre liste de diffusion, vous acceptez également nos mentions légales et notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
