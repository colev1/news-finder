import React from 'react';

const Nav = ({fetchNews}) => {
  return (
    <div>
      <button onClick={fetchNews}> press </button>
    </div>
  )
}

export default Nav;