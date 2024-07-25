
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
app.use(json())
app.use(urlencoded({extended: true}))

app.use('/api/carts', cartsRouter)
app.use('/api/products', productsRouter)
app.use('/', viewsRouter)
app.engine('handlebars', handlebars.engine())
app.set('views',__dirname + '/views')
app.set('view engine', 'handlebars')
//Utilizar recursos estaticos
app.use(express.static(__dirname + './public'))

const httpServer = app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
const socketServer = new Server(httpServer)

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado");

    socket.on('message', data =>{
        console.log(data);
    })
})


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// })