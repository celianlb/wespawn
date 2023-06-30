import NewsletterForm from "@/components/Newsletters";
import React from "react";

const NewsAvis = () => {
  return (
    <div className="md:sticky md:left-0 w-full mt-20">
      <div className="md:w-1/2 border-var-grey border-2 rounded-lg p-8 md:p-10">
        <h3 className="uppercase text-h3-mobil font-montserratblack mb-6 md:mb-4 md:text-h3-ds">
          Newsletter
        </h3>
        <NewsletterForm />
      </div>
    </div>
  );
};

export default NewsAvis;
