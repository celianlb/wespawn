"use client"
import { useState } from 'react';

const Questions = () => {
  const [showAnswers, setShowAnswers] = useState([false, false, false, false]);

  const handleQuestionClick = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
   <div className='my-20'>
      <h1 className="text-white text-2xl font-bold mb-4 md:hidden">Questions</h1>
      <div className=" w-full md:w-1/2 float-right mb-10">
      <div className="grid gap-4">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`text-white border border-white p-4 cursor-pointer ${
              showAnswers[index] ? 'w-full float-right' : ''
            }`}
            onClick={() => handleQuestionClick(index)}
          >
            <h2 className="font-bold mb-2">{question}</h2>
            {showAnswers[index] && (
              <div className="mt-4">
                <p className="text-white" >{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <h2 className="hidden uppercase text-h2-mobil md:text-h2-ds font-montserratblack md:block text-white text-2xl font-bold mb-4">
          Des questions ?
        </h2>  
    <h1 className="text-white text-2xl font-bold mb-4 mt-10">Rejoignez notre communauté</h1>
    <div className="mt-8 flex flex-wrap justify-start md:justify-left">
    <a href="ttps://instagram.com/wespawn.fr?igshid=MzRlODBiNWFlZA==">
          <img src="./img/insta.svg" alt="Facebook" className="w-8 h-8 mx-2" />
        </a>
        <a href="https://twitter.com/wespawn_fr?s=21&t=7DkxcCThLkuIu4TWaHtIqg">
          <img src="./img/twitter.svg" alt="Twitter" className="w-8 h-8 mx-2" />
        </a>
        <a href="https://www.instagram.com">
          <img src="./img/discord.svg" alt="Instagram" className="w-8 h-8 mx-2" />
        </a>
      </div>
    </div>
    
  );
};

export default Questions;

// Tableau des questions
const questions = [
  "Comment puis-je accéder à mon tableau de bord ?",
  "Comment puis-je organiser un tournoi ?",
  "Comment savoir si une salle correspond à mes besoins ?",
  "Est-il possible de contacter directement la salle ?",
];

// Tableau des réponses correspondantes
const answers = [
  "Pour accéder à votre tableau de bord, vous devez vous inscrire ou vous connecter à votre compte à l'aide de vos identifiants. Si c'est votre première visite, quelques questions vous seront posés. Pas de panique, vous pourrez toujours passer cette étape pour y revenir plus tard. Une fois connecté, vous serez redirigé automatiquement vers votre tableau de bord",
  "Dans votre tableau de bord, vous pourrez facilement y configurer votre tournoi, ajouter les informations pertinentes tels que les règles, le format, les prix, gérer les participants et même visualiser le classement des joueurs et les statistiques de vente à la fin de cet événement.",
  "Notre plateforme dispose d'un système de filtrage qui vous permet de trouver facilement la salle idéale pour votre tournoi. Sur la page de chaque salle, vous trouverez une section dédiée aux équipements disponibles. Nous répertorions les équipements essentiels tels que le matériel de jeu, les systèmes de son, etc. Si vous avez des besoins spécifiques, nous vous encourageons à contacter le propriétaire de la salle pour obtenir des informations détaillées.",
  "Oui, sur la page de chaque salle, vous trouverez un bouton « Contacter » menant vers les coordonnées de contact du propriétaire de la salle. À noter que nous ne sommes pas directement impliqués dans le processus de réservation. Nous vous invitons à discuter des détails de réservation et des conditions directement avec le propriétaire.",
];