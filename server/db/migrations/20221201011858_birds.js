exports.up = (knex) => {
  return knex.schema.createTable('birds', (table) => {
    table.increments('id')
    table.integer('ML_Catalog_Number')
    table.string('Common_Name')
    table.string('Scientific_Name')
    table.string('Country')
    table.string('State')
    table.string('Locality')
    table.string('Media_notes')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('birds')
}
