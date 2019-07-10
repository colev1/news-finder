import React from 'react';
import '../styling/App.css';

function App() {
  const fetchNews = () => {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=l0v3Eo88AnIzzFYKaws93M7gOCQ9UBjE')
      .then(response => response.json())
      .then(result => console.log(result.results))
  }

  
  return (
    <div className="App">
      <header className="App-header">
        News app
        <button onClick={fetchNews}> press </button>
      </header>
    </div>
  );
}

export default App;
