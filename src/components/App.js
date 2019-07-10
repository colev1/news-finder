import React, { Component } from 'react';
import '../styling/App.css';
import cleanArticles from '../helper';
import Main from './Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      limit: 10,
      offset: 0
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
    if(!this.state.offset) {
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

  render() {
    return (
      <div className="App">
        News app
          <button onClick={this.fetchNews}> press </button>
        <Main articles={this.state.articles} showMoreArticles={this.showMoreArticles} />
      </div>
    );
  }
}

export default App;
