'use strict'

require('node-jsx').install({ harmony: true })

const express = require('express')
const reactEngine = require('react-engine')
const app = express()
const port = 8888

const engine = reactEngine.server.create()
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.engine('.jsx', engine)
app.set('view engine', 'jsx')

app.set('view', reactEngine.expressView)

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
  })
})

app.listen(port, () => {
  console.log('\nNext TV corriendo en el puerto: ' + port + '\n')
})
