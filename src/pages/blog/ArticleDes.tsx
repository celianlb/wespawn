"use client"
import { useEffect, useState } from 'react';
import articles from './articles';
import Article from './article';
import Image from 'next/image'


const DesktopArticlePage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null); // État pour stocker l'article sélectionné

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleGoBack = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      <h1 className="mb-5 w-189 h-29 left-34 top-419 font-montserrat font-extrabold text-2xl leading-29 uppercase text-white">
        Nos articles
      </h1>
      {selectedArticle ? (
        <Article article={selectedArticle} onGoBack={handleGoBack} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{gridTemplateColumns: '50% 25% 25%', gridTemplateRows: '400px'}}>
          {articles.map((article, index) => (
            <div
              key={index}
              className={`flex p-4 rounded h-400 h-400${
                index === 0 ? 'w-full' : 'lg:w-full'
              }`}
              style={{ backgroundImage: `url(${article.image})` }}
              
            >
             <div className='self-end'>
              <p className="mt-2 self-end">{article.description}</p>
              {/* Ajouter un bouton pour accéder à l'article */}
              <button className="w-fit underline flex mt-4 text-var-blue self-end" onClick={() => handleArticleClick(article)}>
                Lire l'article
                <Image className="mt-1 pl-1 md:mt-2" src='/img/blue-arrow.svg' width={11} height={12} alt='Arrow CTA' />
              </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopArticlePage;
