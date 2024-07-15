
const express = require('express')
const cartsRouter = require('./routes/carts.router.js')
const productsRouter = require('./routes/products.router.js')

const app = express()
const PORT = 8080

//MIDDLEWARES
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

app.use('/api/carts', cartsRouter)
app.use('/', productsRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})