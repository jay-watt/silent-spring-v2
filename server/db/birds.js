const connection = require('./connection')

module.exports = {
  getBirds,
  getBirdById,
}

//fetching all the data
function getBirds(db = connection) {
  return db('birds').select()
}

//fetching data by id
function getBirdById(id, db = connection) {
  return db('birds').where('id', id).select()
}
