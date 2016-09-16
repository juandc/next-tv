import React, { Component } from 'react'

class Menu extends React.Component {
  render () {
    return <nav className="Menu" id="menu">
      <div className="container">
        <figure className="Menu-logo">
          <h2>Next TV</h2>
        </figure>
        <div className="Menu-icon Menu-icon--search">
          <i className="fa fa-search"></i>
        </div>
      </div>
    </nav>
  }
}

export default Menu
