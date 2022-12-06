exports.up = (knex) => {
  return knex.schema.createTable('birds', (table) => {
    table.increments('id')
    table.string('Sound_Id')
    table.string('Te_Reo')
    table.string('English_Name')
    table.string('Country')
    table.integer('Status')
    table.integer('Sound_Level')
    table.string('Habitat')
    table.string('Media_Notes')
    table.string('Sound_Credit')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('birds')
}
