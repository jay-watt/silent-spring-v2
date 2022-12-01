const connection = require('./connection')

module.exports = {
  getBirds,
  getBirdsById,
}

//fetching all the data
function getBirds(db = connection) {
  return db('birds').select()
}

//fetching data by id
function getBirdsById(id, db = connection) {
  return db('birds').where('id', id).select()
}
