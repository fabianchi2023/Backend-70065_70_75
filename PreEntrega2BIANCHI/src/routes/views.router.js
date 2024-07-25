import express from 'express'
import {readFile, writeFile} from 'fs'

const router = express.Router()

readFile('./src/productos.json', 'utf8', (error, data) => {
        
    if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error de lectura de archivo' });
    }

    const products = JSON.parse(data);
    //console.log(products);

    router.get('/', (req, res) => {
        res.render('home', {
            products
        })
    })

})


export default router