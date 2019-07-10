import React from 'react';
import '../styling/Nav.css';

const Nav = ({ fetchNews }) => {
  return (
    <div className="nav-container">
      <h1> NEWS </h1>
      <button onClick={fetchNews} className="nav-button"> view recent stories </button>
    </div>
  )
}

export default Nav;