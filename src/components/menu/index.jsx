import React from 'react';

function Menu() {
  return (
    <nav className="Menu" id="menu">
      <div className="container">
        <figure className="Menu-logo">
          <h2>Next TV</h2>
        </figure>
        <div className="Menu-icon Menu-icon--search">
          <i className="fa fa-search" />
        </div>
      </div>
    </nav>
  );
}

export default Menu;
