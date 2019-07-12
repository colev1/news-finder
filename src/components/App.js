import React, { Component } from 'react';
import '../styling/App.css';
import cleanArticles from '../helper';
import Main from './Main';
import Form from './Form';
import Nav from './Nav';
import ArticleDetails from './ArticleDetails';
import { Route, NavLink, withRouter, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      filter: '',
      count: 0,
      sections: ['arts', 'automobiles','books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'national', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 'tmagazine', 'travel', 'upshot', 'world'],
      loadedArticles: false
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
  }

  displayArticles = (articles) => {
    let currentArticles = this.state.articles;
    let urls = currentArticles.map(article => article.url)
    articles.forEach(article => {
      if(urls.includes(article.url)) {
      } else {
        currentArticles.push({...article, id: currentArticles.length})
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

  expandArticle = (id) => {
    console.log(id);

  }

  render() {
    let { filter, articles, loadedArticles, count, sections } = this.state;
    return (
      <div className="App">
        {loadedArticles ? <Form changeFilter={this.changeFilter} filter={filter} /> : <Nav fetchNews={this.fetchNews} showArticles={loadedArticles} />}
        <Main articles={articles} fetchNews={this.fetchNews} filter={filter} expandArticle={this.expandArticle}/>
      <Switch>
        <Route exact path='/' component={Nav} />
        <Route path = '/articles/:id' render={({match}) => {
            const article = this.state.articles.find((article) => (
                article.id === parseInt(match.params.id)
            ));
            return <ArticleDetails {...article} />
        }} />
      </Switch>
      </div>
    )
  }
}

export default App;
