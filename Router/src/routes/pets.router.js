//
const express = require('express')
const router = express.Router() //=> Necesario para armar las rutas.

const pets = []

// GET
router.get('/pets', (req,res) => {
    res.json(pets)
})

//POST
router.post('/pets', (req, res) => {
    const newPet = req.body
    pets.push(newPet)
    res.json({msg: "Mascota agregada"})
})

module.exports = router