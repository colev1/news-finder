import React from 'react';
import '../styling/ArticleDetails.css';

const ArticleDetails = ({ title, abstract, byline, date, id, section, media, url, updated }) => {
  return (
    <div className="article">
      <h1> {title} </h1>
      <h3> {byline} </h3>
      <p> section: {section} </p>
      <p> {abstract} </p>
      <img src={media[4].url} className="article-image"/>
      <a href={url}> Click to view article </a>
    </div>
  )
}

export default ArticleDetails;