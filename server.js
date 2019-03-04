const express = require('express')
const next = require('next')
const cowsay = require('cowsay')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    if (!req.query.text) req.query.text = 'Say what?'
    app.render(req, res, '/', {cowsay: `${cowsay.say({f: req.query.f, text: req.query.text}) }`})
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
