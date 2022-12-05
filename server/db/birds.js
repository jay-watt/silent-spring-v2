const connection = require('./connection')

module.exports = {
  getBirds,
  getBirdById,
}

function getBirds(db = connection) {
  return db('birds').select()
}

function getBirdById(id, db = connection) {
  return db('birds').where('id', id).select()
}
