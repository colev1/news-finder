import React from 'react';
import '../styling/Nav.css';

const Nav = ({ fetchNews }) => {
  return (
    <div className="nav-container">
      <h1> click to view recent New York Times stories! </h1>
      <button onClick={fetchNews} className="nav-button"> button </button>
    </div>
  )
}

export default Nav;