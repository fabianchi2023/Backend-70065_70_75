
import express, { json, urlencoded } from 'express'
import cartsRouter from './routes/carts.router.js'
import productsRouter from './routes/products.router.js'
import viewsRouter from './routes/views.router.js'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import { Server } from 'socket.io'


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

//Configuracion del socketServer
const httpServer = app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
const socketServer = new Server(httpServer)

socketServer.on('connection', socket=> {
    console.log("nuevo cliente conectado")

    socket.on('message', data =>{
        console.log(`Recepcion datos: ${data}`)
    })
})