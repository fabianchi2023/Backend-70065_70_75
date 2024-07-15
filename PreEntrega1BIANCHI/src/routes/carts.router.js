const express = require('express')
const router = express.Router()
const fs = require('fs')


// Ruta POST para crear un carrito nuevo

router.post('/api/carts', (req, res) => {

    const { id, products } = req.body;

    if (id && products) {

// Escribir el carrito en el archivo "carts.json" mediante FS

        fs.readFile('./src/carts.json', 'utf8', (error, data) => {

            if (error) {

                console.error(error);
                return res.status(500).json({ error: 'Error de lectura de archivo' });

            }

            const carts = JSON.parse(data);

            carts.push({ id, products });

            fs.writeFile('./src/carts.json', JSON.stringify(carts, null, 2), error => {

                if (error) {

                    console.error(error);
                    return res.status(500).json({ error: 'Error de lectura de archivo' });

                }

                res.json({ id, products });

            });

        });

    } else {

        res.status(400).json({ error: 'id and products are required' });

    }

});

// Ruta GET para obtener un carrito por su ID

router.get('/carts/:cid', (req, res) => {

    const id = req.params.cid;

// Leer el archivo "carts.json" mediante FS

    fs.readFile('carrito.json', 'utf8', (err, data) => {

        if (err) {

            console.error(err);

            return res.status(500).json({ error: 'Error de lectura de archivo' });

        }

        const carts = JSON.parse(data);

        const cart = carts.find(cart => cart.id === id);

        if (cart) {

            res.json(cart);

        } else {

            res.status(404).json({ error: 'Cart not found' });

        }

    });

});

// Ruta POST para agregar un producto a un carrito seleccionados por sus PID y CID.

router.post('/:cid/product/:pid', (req, res) => {

    const cartId = req.params.cid;

    const productId = req.params.pid;

    const productToAdd = {

        product: productId,

        quantity: 1

    };

// Leer el archivo "carts.json" mediante FS

    fs.readFile('carrito.json', 'utf8', (error, data) => {

        if (error) {

            console.error(error);
            return res.status(500).json({ error: 'Error de lectura de archivo' });

        }

        const carts = JSON.parse(data);

        const cartIndex = carts.findIndex(cart => cart.id === cartId);

        if (cartIndex !== -1) {

            carts[cartIndex].products.push(productToAdd);

// Escribir los cambios en el archivo "carts.json" mediante FS

            fs.writeFile('carrito.json', JSON.stringify(carts, null, 2), error => {

                if (error) {

                    console.error(error);
                    return res.status(500).json({ error: 'Error de lectura de archivo' });

                }

                res.status(200).json({ message: 'Product added to cart successfully' });

            });

        } else {

            res.status(404).json({ error: 'Cart not found' });

        }

    });

});

module.exports = router