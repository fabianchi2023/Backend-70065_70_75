//
const express = require('express')
const router = express.Router() //=> Necesario para armar las rutas.

const users = []

// GET
router.get('/users', (req,res) => {
    res.json(users)
})

//POST
router.post('/users', (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.json({msg: "USuario agregado"})
})

module.exports = router