import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import Movies from './components/movies/index.jsx'

class Template extends React.Component {
  render () {
    return (
      <div>
        <Movies />
      </div>
    )
  }
}

export default Template
