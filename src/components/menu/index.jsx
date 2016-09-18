import React from 'react';

const translate = require('../translate');

function Menu() {
  return (
    <nav className="Menu" id="menu">
      <div className="container">
        <figure className="Menu-logo">
          <h2>Next TV</h2>
        </figure>
        <div className="Menu-icon Menu-icon--lang">
          <i className="fa fa-bars" />
        </div>
        <div className="Menu-icon Menu-icon--search">
          <i className="fa fa-search" />
        </div>
        <div className="u-dropdown">
          <ul className="Dropdown">
            <li>Español</li>
            <li>Ingles</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function lang(locale) {
  localeStorage.locale = locale;
  location.reload;
}

export default Menu;
