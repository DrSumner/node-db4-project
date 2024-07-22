const express = require('express')

// define routers
const server = express()

server.use(express.json())
//server.use( '', router)

module.exports = server