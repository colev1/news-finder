import React from 'react';
import '../styling/Main.css';
import chevron from '../down-chevron.png';

const Main = ({ articles, fetchNews, filter }) => {
  let matchingArticles;
  if (filter) {
    matchingArticles = articles.filter(article => {
      return article.title.toLowerCase().includes(filter.toLowerCase())
    })
  } else {
    matchingArticles = articles;
  }

  let displayedArticles = matchingArticles.map(article => {
    return <li key={article.url}>
      <h4> {article.title} </h4>
      <p> {article.byline}  </p>
    </li>
  })

  return (
    <div className="articles-container">
      <ul>{displayedArticles}</ul>
      {articles.length ? <button onClick={fetchNews} className="show-more-button">
        <img src={chevron} /> </button> : null}
    </div>
  )
}

export default Main;