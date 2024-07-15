import express from 'express'

// const app = express() //=> Asigno las funcionalidades de EXPRESS a la variable APP.
// const PORT = 8080

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// })

// app.get('/saludo', (req, res) => {
//     res.send("Hola coders!") //=> res.send sirve para responder a la peticion.
// })

// app.get('/bienvenida', (req, res) => {
//     res.send("Bienvenido a mi segundo endpoint")
// })

// app.get('/usuario', (req, res) => {
//     res.send({nombre: "Fabio", apellido: "Bianchi", edad: 34, correo:"fabio@bianchi.com"})
// })

// app.get('/parametro/:usuario', (req, res) => {
//     console.log(req.params.usuario);
//     res.send(`Hola ${req.params.usuario}`)
// })

// app.get('/parametro2/:apellido/:edad', (req,res) => {
//     console.log(req.params.apellido); //=> Esto quiere decir que al asignarle :apellido a la url, lo
//     //hacemos una propiedad del objeto req.params que podremos llamar con req.params.apellido
//     res.send(`Aca te digo el apellido del usuario: ${req.params.apellido} y te digo tambien la edad: ${req.params.edad}`)
// })

// //=> En este ejemplo agregue un segundo parametro que obviamente debe respetar la misma estructura de
// // separacion por / cuando lo busque en la URL del navegador.



//PRUEBA DE REQ.PARAMS
// const usuarios = [
//     {nombre: "Fabio", apellido: "Bianchi", genero: "m" },
//     {nombre: "Sarasa", apellido: "Perez", genero: "f" },
//     {nombre: "Pedro", apellido: "Pepe", genero: "f" },
//     {nombre: "Fede", apellido: "Fernandez", genero: "m" }
// ]

// app.get('/', (req, res) => {
//     res.send(usuarios)
// })

// app.get('/:userID', (req, res) =>{
//     console.log(req.params.userID);
    
//     const userID = req.params.userID
//     const busqueda = usuarios.find(usuario => usuario.id === userID)
//     if(!busqueda) return res.send({error: "Le pifiaste al numero. Usuario no encontrado"})
    
//     res.send(busqueda)
// })

//Prueba de REQ.QUERY
// app.get('/pruebaQueries', (req,res)=>{
//     let consulta = req.query
//     res.send(consulta)
// })

// app.get('/', (req,res) => {
    
//     let genero = req.query.genero

//     if(genero !== "m" && genero !== "f") return res.send(usuarios)
    
//     let filtrado = usuarios.filter(usuario => usuario.genero === genero)
//     res.send(filtrado)
// })

// app.get('/queries', (req,res) => {
//     let querie = req.query
//     res.send(querie)
// })

const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
const PORT = 8080

app.get('/ruta', (req, res) => {
    res.send("Respuesta al endpoint de ruta")
})

app.get('/ruta/:nombre', (req, res) => {
    res.send(`Ahora estoy usando un params con el objeto REQ.PARAM. En este caso le puse ${req.params.nombre}`)
})



app.use(express.urlencoded({extended:true}))

app.get('/unaquerie', (req, res) => {
    res.send (req.query)
})

const usuarios = [
    {nombre: "Fabio", apellido: "Bianchi", genero: "m" },
    {nombre: "Sarasa", apellido: "Perez", genero: "f" },
    {nombre: "Pedro", apellido: "Pepe", genero: "f" },
    {nombre: "Fede", apellido: "Fernandez", genero: "m" }
]

// app.get('/', (req,res) => {
//     res.send(usuarios)
// })

// app.get('/', (req, res)=>{
//     let prueba = req.query
//     res.send(prueba)
// })

app.get('/', (req,res) => {

    let querie1 = req.query.genero
    console.log(querie1);

    if (querie1 !== "m" && querie1 !== "f") return res.send(usuarios)

    let sexo = usuarios.filter(usuario => usuario.genero === querie1)
    res.send(sexo)

})

app.listen(PORT, () => {
    console.log(`Server running on port PORT`);
})