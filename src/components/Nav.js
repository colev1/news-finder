import React from 'react';
import '../styling/Nav.css';

const Nav = ({fetchNews}) => {
  return (
    <div className="nav-container">
      <h1> NEWS </h1>
      <button onClick={fetchNews}> display NEWS </button>
    </div>
  )
}

export default Nav;