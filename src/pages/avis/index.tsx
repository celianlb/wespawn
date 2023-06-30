import React from "react";
import Header from "@/components/Header";
import TeteAvis from "./tete";
import FormAvis from "./formAvis";
import NewsAvis from "./newsAvis";
import Questions from "./questionAvis";
import QuestionComponent from "@/components/Question";
import Footer from "@/components/Footer";

const Avis = () => {
  return (
    <div>
      <div className="ellipse"></div>
      <div className="ellipse2"></div>
      <Header />
      <section className="text-white px-6 md:px-[110px] 2xl:container">
        <div className="mb-[-30px]">
          <TeteAvis />

          <FormAvis />

          <NewsAvis />

          <QuestionComponent />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Avis;
