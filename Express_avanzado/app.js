const express = require('express')

const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
const PORT = 8080

//MIDDLEWARES
app.use(express.json()) //=> Como indica el metodo, ahora el servidor podra recibir json's al momento de la peticion.
// Servira para cuando necesite enviar informacion desde el BODY. Lo usamos cuando creamos un ENDPOINT con POST.
app.use(express.urlencoded({extended: true})) //=> Permite que se pueda enviar informacion tambien desde la URL.

let tasks = [
    {id:1, title: "Estudiar los metodos"},
    {id:2, title: "Repasar express"},
    {id:3, title: "Realizar un proyecto"}
]

//ENDPOINTS

//GET =>
app.get('/tasks', (req, res) => {
        res.json(tasks)
})

app.get('/tasks/:id', (req, res) => {
    const taskID = parseInt(req.params.id)
    const busqueda = tasks.find(task => task.id === taskID)
    if (busqueda){
        res.json(busqueda)      
    } else {
        res.status(404).json({msg:"Tarea no encontrada"})
    }
})

//POST =>
app.post('/api', (req,res) => {
    res.json({msg:"POST API"})
})

app.post('/tasks', (req,res) =>{
    const {title} = req.body
    const newTask = {id:tasks.length+1, title: title || "Probando valor por defecto"}
    tasks.push(newTask)
    res.status(201).json(newTask)
})

//PUT => 
app.put('/api', (req,res) => {
    res.json({msg:"PUT API"})
})

app.put('/tasks/:id', (req, res) =>{
    const taskID = parseInt(req.params.id)
    const busqueda = tasks.find(task => task.id === taskID)
    if(busqueda){
        const {title} = req.body
        busqueda.title = title
        res.json(busqueda)
    }else{
        res.status(404).json({msg: "Tarea no encontrada"})
    }
})

//DELETE => 
app.delete('/api', (req,res) => {
    res.json({msg:"DELETE API"})
})

app.delete('/tasks/:id', (req,res) => {
    const taskID = parseInt(req.params.id)
    tasks = tasks.filter(task => task.id !== taskID)
    res.json({msg:`Tarea con ID ${taskID} eliminada correctamente`})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
