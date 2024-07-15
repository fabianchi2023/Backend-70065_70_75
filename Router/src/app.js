
const express = require('express')
const path = require('path')
const petsRouter = require('./routes/pets.router.js')
const usersRouter = require('./routes/users.router.js')

const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
const PORT = 8080

//MIDDLEWARES
app.use(express.json()) //=> Como indica el metodo, ahora el servidor podra recibir json's al momento de la peticion.
// Servira para cuando necesite enviar informacion desde el BODY. Lo usamos cuando creamos un ENDPOINT con POST.
app.use(express.urlencoded({extended: true})) //=> Permite que se pueda enviar informacion tambien desde la URL.

//Servir archivos estaticos
app.use(express.static(path.join(__dirname)))

app.use('/', petsRouter)
app.use('/', usersRouter)


//Mediante un GET, solicito que me muestre el HTML que cree con mi formulario para mostrar en navegador.
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"))
// })

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})