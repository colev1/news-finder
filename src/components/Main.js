import React from 'react';
import '../styling/Main.css';
import chevron from '../down-chevron.png';
import { Link } from 'react-router-dom';


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
    return <Link to={`/articles/${article.id}`} key={article.id} className="list-item">
      <h4> {article.title} </h4>
      <p> {article.byline}  </p>
    </Link>
  })

  return (
    <div className="articles-container">
      <ul>{displayedArticles}</ul>
      {articles.length ? <button onClick={fetchNews} className="show-more-button">
        Load more..
      </button> : null}
    </div>
  )
}

export default Main;