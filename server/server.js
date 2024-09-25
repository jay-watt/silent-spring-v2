const path = require('path')
const express = require('express')

const server = express()
const birdsRoutes = require('./routes/birds')

server.use(express.json())

server.use(express.static(path.join(__dirname, '..', 'dist')))

server.use('/audio', express.static(path.join(__dirname, 'public', 'audio')))

server.use('/api/v1/birds', birdsRoutes)

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
// })

module.exports = server
