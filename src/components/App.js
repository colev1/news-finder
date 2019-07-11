import React, { Component } from 'react';
import '../styling/App.css';
import cleanArticles from '../helper';
import Main from './Main';
import Form from './Form';
import Nav from './Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      filter: '',
      count: 0,
      sections: ['home','arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'national', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 'tmagazine', 'travel', 'upshot', 'world'],
      loadedArticles: false
    }
  }

  fetchNews = () => {
    const {sections, count} = this.state;
    let url = `https://api.nytimes.com/svc/topstories/v2/${sections[count]}.json?api-key=l0v3Eo88AnIzzFYKaws93M7gOCQ9UBjE`;
    fetch(url)
      .then(response => response.json())
      .then(result => cleanArticles(result.results))
      .then(articles => this.displayArticles(articles))
      .catch(err => console.log(err))
  }

  displayArticles = (articles) => {
      this.setState({
        articles: this.state.articles.concat(articles)
      })
    this.setState({
      loadedArticles: true
    })
  }

  showMoreArticles = () => {
    this.setState({
      count: this.state.count++
    })
    this.fetchNews();
  }

  changeFilter = (e) => {
    console.log(e.target.value)
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    const { filter, articles, loadedArticles } = this.state;
    return (
      <div className="App">
        {loadedArticles ? <Form changeFilter={this.changeFilter} filter={filter} /> : <Nav fetchNews={this.fetchNews} showArticles={loadedArticles} />}
        <Main articles={articles} showMoreArticles={this.showMoreArticles} filter={filter} />
      </div>
    )
  }
}

export default App;
