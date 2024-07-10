// //Creando un servidor con NODE
// // const http = require ('http')

// // const server = http.createServer((request, response) => {
// //     response.end("Mi primer servidor en backend")
// // })

// // server.listen(8080, ()=> {
// //     console.log("Escuchando en el puerto 8080");
// // })


// //LEVANTANDO UN SERVIDOR DE MANERA LOCAL CON EXPRESS
// const express = require('express')

// const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
// const PORT = 8080

// const users = [
//     {nombre: "Fabio", apellido: "Bianchi"},
//     {nombre: "Sarasa", apellido: "Perez"}
// ]

// //Creacion de un ENDPOINT
// app.get('/sarasa', (req, res) => {
//     res.send(users) // => el .send envia info plana. Podria ser .json y enviar justamente en formato JSON.
// } )

// app.get('/holamundo', (req, res) => {
//     res.send("Hola mundo")
// })

// // app.post() => Agregar informacion. Esto se envia mediante POSTMAN. 
// //Es un simulacro de FRONT ya que nos permitira agegar la info

// // app.put() => Actualizar. Necesito un ID como lo hacia con FS.

// // app.delete() => Borrar mediante un ID.

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// })


const express = require('express')

const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
const PORT = 8080

//Middlewares => Para que express pueda entender algo. Funcion nativa de express que le ayuda al navegador
// a interpretar las peticiones. La palabra .use me indica el MIDDLEWARE.

app.use(express.urlencoded({extended: true}))



const alumnos = [
    {id: "1", nombre: "Fabio"},
    {id: "2", nombre: "Ale"},
    {id: "3", nombre: "Sarasa"},
    {id: "4", nombre: "Pepe"},
    {id: "5", nombre: "Mister"},
    {id: "6", nombre: "Messi"},
    {id: "7", nombre: "Dibu"},
    {id: "8", nombre: "Angel"}
]

app.get('/alumnos/:idAlumno',(req, res) => {
    let idAlumno = req.params.idAlumno
    console.log(idAlumno);

    let alumno = alumnos.find(a => a.id === idAlumno)
    
    if (!alumno){
        res.send({error: "No se encuentra el alumno solicitado"})
    }
    res.send({alumno})
})

app.get('/alumnos', (req,res) =>{
    let limit = parseInt(req.query.limit)
    let limitedAlumnos = [...alumnos]
    if (!isNaN(limit) && limit > 0) {
        limitedAlumnos = limitedAlumnos.slice(0, limit) // Limitar la cantidad de alumnos del parametro LIMIT
      
    }
    res.json(limitedAlumnos)
})

app.listen(PORT, () => {
    console.log(`Server running on port PORT`);
})