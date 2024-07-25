
import express, { json, urlencoded } from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import router from './routes/views.router.js'

const app = express() //=> Toda la funcionalidad que nos da el modulo EXPRESS lo asigno a una variable.
const PORT = 8080

//MIDDLEWARES
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

//Configurar Handlebars para leer el contenido de los endpoints:
app.engine('handlebars', handlebars.engine())
app.set('views',__dirname + '/views')
app.set('view engine', 'handlebars')
//Utilizar recursos estaticos
app.use(express.static(__dirname + '/public'))
app.use('/', router)


app.listen(PORT, () => {
    console.log(`Server running on port PORT`);
})