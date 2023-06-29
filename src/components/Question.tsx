"use client";
import { useState } from "react";

const QuestionComponent = () => {
  const [showAnswers, setShowAnswers] = useState([false, false, false, false]);

  const handleQuestionClick = (index: number) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <div className="flex flex-col justify-between md:flex-row-reverse gap-[74px]">
      <div className="md:w-1/2">
        <div className="float-right w-full">
          <div className="flex  flex-col gap-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`text-white border-[2px] p-4 md:px-10 md:py-6 rounded-[8px] border-var-grey cursor-pointer ${
                  showAnswers[index] ? "w-full float-right" : ""
                }`}
                onClick={() => handleQuestionClick(index)}
              >
                <div className="flex flex-row justify-between">
                  <h2 className="">{question}</h2>
                  <img src="/img/icon-dropdown.svg" alt="" className="" />
                </div>
                {showAnswers[index] && (
                  <div className="mt-4">
                    <p className="text-white">{answers[index]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="hidden uppercase text-h2-mobil md:text-h2-ds font-montserratblack md:block text-white text-2xl font-bold mb-4">
          Des questions ?
        </h2>
        <p className="font-montserratblack uppercase text-txt text-white text-2xl font-bold mb-4 mt-10">
          Rejoignez notre communauté
        </p>
        <div className="mt-8 gap-10 flex flex-wrap justify-start">
          <a href="https://www.instagram.com/wespawn.fr/">
            <img src="/img/insta.svg" alt="Instagram" className="w-10 h-10" />
          </a>
          <a href="https://twitter.com/wespawn_fr">
            <img src="/img/twitter.svg" alt="Twitter" className=" w-10 h-10" />
          </a>
          <a href="https://discord.com/invite/WjtPvnvR">
            <img src="/img/discord.svg" alt="Discord" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;

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
