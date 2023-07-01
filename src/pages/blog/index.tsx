import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import TeteBlog from './teteBlog';
import Dach from './dach';
import DesktopArticlePage from './ArticleDes'
// import ArticleCards from './articleCard';
import NewsLetter from './newsLetter';
import Questions from './question';



export default function Home() {

  return (
   <div>
    <div className='ellipse3'></div>
      <Header />
    <section className='text-white px-6 md:px-[110px] 2xl:container'>
      <div className='mb-[-30px]'>
        <TeteBlog />

        <Dach />

        <DesktopArticlePage />

        {/* <ArticleCards /> */}

        <NewsLetter />

        <Questions /> 
      </div>
    </section>
      
      
      

   </div>

        
  )
}
