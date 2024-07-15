// import { Router } from 'express';
// import fs from 'fs';
// const **router** = Router();

const express = require('express')
const router = express.Router()
const fs = require('fs')

// const prueba = []

// router.get('/prueba', (req,res)=> {
//     res.json(prueba)
// })

// Ruta para leer todos los productos

router.get('/api/products', (req, res) => {

// Lee el archivo "productos.json"

    fs.readFile('./src/products.json', 'utf8', (err, data) => {

        if (err) {

            console.error(err);

            return res.status(500).json({ error: 'Internal Server Error' });

        }

        const products = JSON.parse(data);
        const limit = req.query.limit;

        if (limit) {

          res.json(products.slice(0, limit));

        } else {

            res.json(products);

         }

    });

});

// Ruta para leer un producto por su ID

router.get('api/products/:pid', (req, res) => {

    const id = req.params.pid;

// Lee el archivo "products.json"

    fs.readFile('./src/products.json', 'utf8', (err, data) => {

        if (err) {

            console.error(err);

            return res.status(500).json({ error: 'Internal Server Error' });

        }

        const products = JSON.parse(data);

        const product = products.find(product => product.id === parseInt(id));

        if (product) {

            res.json(product);

        } else {

            res.status(404).json({ error: 'Product not found' });

        }

    });

});

//POST para el agregado de nuevo producto:

router.post('/api/products', (req, res) => {

    const { title, description, code, price, status, stock, category } = req.body;

// Lectura del archivo 'PRODUCTS.JSON' para identificar la longitud del array que marcara la automatizacion
// del ID del nuevo producto
    fs.readFile('./src/products.json', 'utf8', (error, data) => { 

        if (error) {
            console.error(error)
            return res.status(500).json({ error: 'Error de lectura de archivo' });

        }

        const products = JSON.parse(data);
        //console.log(products);
        const id = products.length + 1;
        const newProduct = { id, title, description, code, price, status, stock, category };
        products.push(newProduct);
// Escritura al archivo 'PRODUCTS.JSON' para el agregado del nuevo producto:

    fs.writeFile('./src/products.json', JSON.stringify(products, null, 2), error => {

        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error de lectura de archivo' });
        }

        res.json(newProduct);

    });

    });

});

module.exports = router