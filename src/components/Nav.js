import React from 'react';
import '../styling/Nav.css';
import arrow from '../arrow-right-solid.svg';

const Nav = ({ fetchNews }) => {
  return (
    <div className="nav-container">
      <h1> Click to load top New York Times articles </h1>
      <img onClick={fetchNews} className="nav-button" src={arrow} alt="Arrow right button." />
      <a href="https://developer.nytimes.com/" className="source">
        api: https://developer.nytimes.com/
      </a>
    </div>
  )
}

export default Nav;