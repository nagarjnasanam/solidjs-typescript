const http = require('http')
const express = require('express')

const app = express()
app.use(express.json())
app.use(express.static('express'))
app.use(express.static(`${__dirname}/../dist`))

const server = http.createServer(app)
const port = 4000
server.listen(port)
console.debug("server is ruming",port)