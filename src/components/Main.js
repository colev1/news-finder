import React from 'react';
import '../styling/Main.css';

const Main = ({articles, showMoreArticles, filter}) => {
  const list = articles.map(article => {
    return <li key={article.id}> {article.title} </li>
  })

  return (
    <div>
      <ul className="articles-container">{list}</ul>
      <button onClick={showMoreArticles}>show more articles</button>
    </div>
  )
}

export default Main;