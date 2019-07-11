import React from 'react';
import '../styling/Main.css';
import chevron from '../down-chevron.png';


const Main = ({ articles, showMoreArticles, filter }) => {
  let matchingArticles;
  if (filter) {
    matchingArticles = articles.filter(article => {
      return article.title.toLowerCase().includes(filter.toLowerCase())
    })
  } else {
    matchingArticles = articles;
  }

  let displayedArticles = matchingArticles.map((article, i) => {
    return <li key={i}>
      <h4> {article.title} </h4>
      <p> {article.byline}  </p>
    </li>
  })

  return (
    <div className="articles-container">
      <ul>{displayedArticles}</ul>
      {articles.length ? <button onClick={showMoreArticles} className="show-more-button"> 
      <img src ={chevron} onClick={showMoreArticles}/> </button> : null}
    </div>
  )
}

export default Main;