import React from 'react';
import Main from './Main';
import Form from './Form';
import Nav from './Nav';

const Home = ({ changeFilter, filter, fetchNews, articles, loadedArticles }) => {
  return (
    <div>
      { loadedArticles ?
        <Form changeFilter={changeFilter} filter={filter} />
        : <Nav fetchNews={fetchNews} />}
      <Main
        articles={articles}
        fetchNews={fetchNews}
        filter={filter}
      />
    </div>
  )
}

export default Home;