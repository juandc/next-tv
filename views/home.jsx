'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

const Template = React.createClass({
  render () {
    let title = 'Next TV - ' + this.props.title
    return (
      <html>
        <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <title>{ title }</title>
        </head>
        <body>
          <div id="content"></div>
          <script src="src/app.js"></script>
        </body>
      </html>
    )
  }
})

module.exports = Template
