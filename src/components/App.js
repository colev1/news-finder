import React, { Component } from 'react';
import '../styling/App.css';
import cleanArticles from '../helper';
import Home from './Home'
import ArticleDetails from './ArticleDetails';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      filter: '',
      count: 0,
      sections: ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'national', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 'tmagazine', 'travel', 'upshot', 'world'],
      loadedArticles: false,
      specificArticle: {}
    }
  }

  fetchNews = () => {
    let { sections, count } = this.state;
    let url = `https://api.nytimes.com/svc/topstories/v2/${sections[count]}.json?api-key=l0v3Eo88AnIzzFYKaws93M7gOCQ9UBjE`;
    fetch(url)
      .then(response => response.json())
      .then(result => cleanArticles(result.results))
      .then(articles => this.displayArticles(articles))
      .catch(err => console.log(err))
    this.setState({ filter: '' })
  }

  displayArticles = (articles) => {
    let currentArticles = this.state.articles;
    let urls = currentArticles.map(article => article.url)
    articles.forEach(article => {
      if (urls.includes(article.url)) {
      } else {
        currentArticles.push({ ...article, id: currentArticles.length })
      }
    })

    this.setState({
      articles: currentArticles,
      loadedArticles: true,
    })
    this.setState({
      count: this.state.count + 1
    })
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    let { filter, articles, loadedArticles } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} changeFilter={this.changeFilter} filter={filter} fetchNews={this.fetchNews} articles={articles} loadedArticles={loadedArticles} />} />
          <Route path='/articles/:headline' render={(props) => <ArticleDetails {...props} articles={this.state.articles} /> } />
        </Switch>
      </div>
    )
  }
}

export default App;
