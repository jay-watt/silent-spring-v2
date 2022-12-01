const express = require('express')
const db = require('../db/birds')

const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  try {
    const birds = await db.getBirds()
    res.json({ birds })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const selectedBird = await db.getBirdsById(id)
    res.json({ selectedBird })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
