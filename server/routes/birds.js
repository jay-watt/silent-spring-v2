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
