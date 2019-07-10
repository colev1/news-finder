import React, {Component} from 'react';
import '../styling/App.css';
import cleanArticles from '../helper'

class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: []
    }
  }

  fetchNews = () => {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=l0v3Eo88AnIzzFYKaws93M7gOCQ9UBjE')
      .then(response => response.json())
      .then(result => cleanArticles(result.results))
      .then(titles => this.setState({
        titles
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          News app
          <button onClick={this.fetchNews}> press </button>
      </div>
    );
  }
}

export default App;
