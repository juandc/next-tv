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
            <li onClick={lang.bind(null, 'en-US')}>{translate.message('en-US')}</li>
            <li onClick={lang.bind(null, 'es')}>{translate.message('es')}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function lang(locale) {
  // var isNode = typeof module !== 'undefined'
  // if(typeof(Storage) !== "undefined"){
  //   localStorage.locale = locale;
  //   location.reload;
  // }
  localStorage.locale = locale;
  window.location.reload(false);
  console.log('drtghj')
}

export default Menu;
