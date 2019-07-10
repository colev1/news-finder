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
      limit: 10,
      offset: 0,
      filter: ''
    }
  }

  fetchNews = () => {
    const { limit, offset } = this.state;
    let url = `https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=l0v3Eo88AnIzzFYKaws93M7gOCQ9UBjE&limit=${limit}&offset=${offset}`
    fetch(url)
      .then(response => response.json())
      .then(result => cleanArticles(result.results))
      .then(articles => this.displayArticles(articles))
      .catch(err => console.log(err))
  }

  displayArticles = (articles) => {
    if (!this.state.offset) {
      this.setState({
        articles
      })
    } else {
      this.setState({
        articles: this.state.articles.concat(articles)
      })
    }
  }

  showMoreArticles = () => {
    this.setState({
      offset: this.state.offset + 10
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
    const {filter, articles} = this.state; 
    if (this.state.articles.length) {
      return (
        <div className="App">
          <Nav fetchNews={this.fetchNews} />
          <Form changeFilter={this.changeFilter} filter={filter}/>
          <Main articles={articles} showMoreArticles={this.showMoreArticles} filter={filter} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav fetchNews={this.fetchNews} />
        </div>
      );
    }
  }
}

export default App;
