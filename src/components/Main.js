import React from 'react';
import '../styling/Main.css';

const Main = ({ articles, showMoreArticles, filter }) => {
  let matchingArticles;
  if (filter) {
    matchingArticles = articles.filter(article => {
      return article.title.toLowerCase().includes(filter.toLowerCase())
    })
  } else {
    matchingArticles = articles;
  }

  let displayedArticles = matchingArticles.map(article => {
    return <li key={`${article.date}_${article.updated}`}> {article.title} </li>
  })

  return (
    <div>
      <ul className="articles-container">{displayedArticles}</ul>
      <button onClick={showMoreArticles}>show more articles</button>
    </div>
  )
}

export default Main;