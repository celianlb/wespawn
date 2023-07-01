import React from 'react';


const Article = ({ article, onGoBack }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mt-2">{article.title}</h2>
      <p className="mt-2">{article.text}</p>
      <button onClick={onGoBack}>
        Retourner à la liste d'articles
      </button>
    </div>
  );
};

export default Article;
