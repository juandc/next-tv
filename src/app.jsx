'use strict'

// require('./styles/main.styl')

var React = require('react')
var ReactDOM, { render } = require('react-dom')
var Movie = require('./components/movie.jsx')

var Template = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Hello, {this.props.name}</h2>
        <Movie />
      </div>
    )
  }
})

render(<Template />, document.getElementById('content'))
