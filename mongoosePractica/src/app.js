
const express = require('express')
const mongoose = require('mongoose')
const userRouter= require('./routes/users.router.js')


const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
const PORT = 8080

//MIDDLEWARES
app.use(express.json()) //=> Como indica el metodo, ahora el servidor podra recibir json's al momento de la peticion.
// Servira para cuando necesite enviar informacion desde el BODY. Lo usamos cuando creamos un ENDPOINT con POST.
app.use(express.urlencoded({extended: true})) //=> Permite que se pueda enviar informacion tambien desde la URL.

mongoose.connect("mongodb+srv://fabiobianchi:Ocasa2009@cluster0.dx5auig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(()=> {
    console.log("Conectado a la base de datos");
    
})
.catch(()=>{
    console.error("Error al conectar con la base de datos", error)
})

app.use("/", userRouter)

app.listen(PORT, () => {
    console.log(`Server running on port PORT`);
})

