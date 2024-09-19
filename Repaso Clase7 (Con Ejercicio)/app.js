
const express = require('express')

const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
const PORT = 8080

//MIDDLEWARES
app.use(express.json()) //=> Como indica el metodo, ahora el servidor podra recibir json's al momento de la peticion.
// Servira para cuando necesite enviar informacion desde el BODY. Lo usamos cuando creamos un ENDPOINT con POST.
app.use(express.urlencoded({extended: true})) //=> Permite que se pueda enviar informacion tambien desde la URL.

const fraseInicial= {frase: "Frase inicial"}

// METODOS

app.get ('/api/frase', (req, res) => {
    res.json(fraseInicial)
})

app.get('/api/palabras/:pos', (req,res) => {

})

// app.post('/api/palabras', (req,res) => {
//     const {palabra} = req.body
//     res.json = ({...fraseInicial, palabra})
// })

app.post('/api/palabras', (req,res) =>{
    const {palabra} = req.body
    const nuevaPalabra = {...fraseInicial, agregada: palabra}
    res.status(201).json(nuevaPalabra)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})