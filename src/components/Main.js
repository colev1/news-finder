import React, {Component} from 'react';
import '../styling/Main.css';

const Main = (props) => {
  const list = props.articles.map(articles => {
    return <li> {articles.title} </li>
  })

  return (
    <div>
      <h1> Today's popular articles </h1>
      <ul className="articles-container">{list}</ul>
    </div>
  )
}

export default Main;