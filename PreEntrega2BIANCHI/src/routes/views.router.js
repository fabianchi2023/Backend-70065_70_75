import express from 'express'
import { readFile } from 'fs'

const router = express.Router()

    router.get('/', (req, res) => {
        readFile('./src/productos.json', 'utf8', (error, data) => {

            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error de lectura de archivo' });
            }
    
            let products = JSON.parse(data)
            console.log(products);
            
            res.render('home', ({products}))
        })
        
    })

    router.get('/realtimeproducts', (req, res)=>{
        res.render('realTimeProducts')
    })

export default router