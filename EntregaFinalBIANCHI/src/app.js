
import express from 'express'
import cartsRouter from './routes/carts.router.js'
import productsRouter from './routes/products.router.js'
import viewsRouter from './routes/views.router.js'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import productsModel from './models/products.model.js'
import cartModel from './models/carts.model.js'


const app = express()
const PORT = 8080

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Rutas
app.use('/api/carts', cartsRouter)
app.use('/api/products', productsRouter)
app.use('/', viewsRouter)

//Configuración handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

//Conexion a MONGODB:
const enviroment = async () => {
    await mongoose.connect("mongodb+srv://fabiobianchi:Ocasa2009@cluster0.dx5auig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

}

enviroment()

//Configuracion del socketServer
const httpServer = app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
const socketServer = new Server(httpServer)

socketServer.on('connection', socket=> {
    console.log("Nuevo cliente conectado")

    socket.on('newProduct', (data) =>{
        const newProduct = data;
        socketServer.emit('dataForm', newProduct)
    })

})

