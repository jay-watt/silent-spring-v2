const connection = require('./connection')

module.exports = {
  getBirds,
}

function getBirds(db = connection) {
  return db('birds').select()
}
