import React from 'react';
import '../styling/Nav.css';
import arrow from '../arrow-right-solid.svg';

const Nav = ({ fetchNews }) => {
  return (
    <div className="nav-container">
      <h1> Click to view Top New York Times articles </h1>
      <img onClick={fetchNews} className="nav-button" src={arrow} alt="Arrow right button." />
    </div>
  )
}

export default Nav;