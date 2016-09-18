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
          <link rel="shortcut icon" type="image/x-icon" href="https://facebook.github.io/react/img/logo.svg"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dosis|Open+Sans|Roboto+Condensed"/>
        </head>
        <body>
          <div id="content"></div>
          <script src="src/app.js"></script>
          <script src="src/modal.js"></script>
        </body>
      </html>
    )
  }
})

module.exports = Template
