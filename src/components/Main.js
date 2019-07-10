import React from 'react';
import '../styling/Main.css';

const Main = ({articles, showMoreArticles}) => {
  const list = articles.map(articles => {
    return <li> {articles.title} </li>
  })

  return (
    <div>
      {/* <h1> Today's popular articles </h1> */}
      <ul className="articles-container">{list}</ul>
      <button onClick={showMoreArticles}>show more articles</button>
    </div>
  )
}

export default Main;