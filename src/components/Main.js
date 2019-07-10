import React, {Component} from 'react';
import '../styling/App.css';

const Main = (props) => {
  const list = props.articles.map(articles => {
    return <li> {articles.title} </li>
  })

  return (
    <div>
      <h1> Today's popular articles </h1>
      <ul>{list}</ul>
    </div>
  )
}

export default Main;