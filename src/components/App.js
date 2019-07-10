import React, {Component} from 'react';
import '../styling/App.css';
import cleanArticles from '../helper';
import Main from './Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  fetchNews = () => {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=l0v3Eo88AnIzzFYKaws93M7gOCQ9UBjE')
      .then(response => response.json())
      .then(result => cleanArticles(result.results))
      .then(articles => this.setState({
        articles
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          News app
          <button onClick={this.fetchNews}> press </button>
          <Main articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
