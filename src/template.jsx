import React, { Component } from 'react'
import Menu from './components/menu/index.jsx'
import Movies from './components/movies/index.jsx'

class Template extends React.Component {
  render () {
    return (
      <section>
        <Menu />
        <Movies />
      </section>
    )
  }
}

export default Template
