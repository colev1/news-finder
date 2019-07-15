import React, { Component } from 'react';
import '../styling/ArticleDetails.css';

class ArticleDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: null
    }
  }

  componentDidMount() {
    this.fetchSpecificArticle(this.props.match.params.headline)
  }

  fetchSpecificArticle = (headline) => {
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=headline:("${headline}")&api-key=l0v3Eo88AnIzzFYKaws93M7gOCQ9UBjE`
    fetch(url)
      .then(response => response.json())
      .then(article => this.setState({
        article: article.response.docs[0]
      }))
      .then(article => article)
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.article) {
      const { headline, abstract, byline, pub_date, section_name, web_url, word_count } = this.state.article;
      return (
        <div className="article">
          <h1> {headline.main} </h1>
          <h3> {byline.original} </h3>
          <h3> date: {pub_date.slice(0, 10)} </h3>
          <h3> word count: {word_count} </h3>
          <p> section: {section_name} </p>
          <p> {abstract} </p>
          <a href={web_url ? web_url : null}> Click to view article </a>
        </div>
      )
    } else {
      return (
        <div className="loading-page">
          loading...
      </div>
      )
    }
  }
}

export default ArticleDetails;