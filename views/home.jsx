'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

const Template = React.createClass({
  render () {
    return (
      <html>
        <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <title>Next TV - { this.props.title }</title>
        </head>
        <body>
          <h2>Hello Next TV!</h2>
        </body>
      </html>
    )
  }
})

export default Template
