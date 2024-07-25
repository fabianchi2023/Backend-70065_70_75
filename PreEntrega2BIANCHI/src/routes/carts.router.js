import express from 'express'
import { readFile, writeFile } from 'fs'
const router = express.Router()


// Ruta POST para crear un carrito nuevo

router.post('/', (req, res) => {
    const {products} = req.body
    readFile('./src/carrito.json', 'utf8', (error, data) => { 
        if (error) {
            console.error(error)
            return res.status(500).json({ error: 'Error de lectura de archivo' });
        }
        const carts = JSON.parse(data);
        const id = carts.reduce((id, cart) => {
          return cart.id > id ? cart.id : id}, 0) + 1;
        
        const newCart = { id, products};
        carts.push(newCart);

        // Escritura al archivo 'products.json' para el agregado del nuevo producto:

        writeFile('./src/carrito.json', JSON.stringify(carts, null, 2), error => {

            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error de lectura de archivo' });
            }
            res.status(201).json(carts);
        });

    });

})

// Ruta GET para obtener un carrito por su ID

router.get('/:cid', (req, res) => {

    const cartID = parseInt(req.params.cid);

// Leer el archivo carrito.json" mediante FS

    readFile('./src/carrito.json', 'utf8', (error, data) => {

        if (error) {
            console.error(err);
            return res.status(500).json({ error: 'Error de lectura de archivo' });
        }

        const carts = JSON.parse(data);
        const cart = carts.find(cart => cart.id === cartID);

        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ error: 'Carrito no encontrado' });
        }
    });
});

// Ruta POST para agregar un producto a un carrito seleccionados por sus PID y CID.

router.post('/:cid/product/:pid', (req, res) => {

    const cartId = parseInt(req.params.cid); 
    const productId = parseInt(req.params.pid); 
    const {quantity} = req.body

    // Leer el archivo "carrito.json" mediante FS

    readFile('./src/carrito.json', 'utf8', (error, data) => {

        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error de lectura de archivo' });
        }

        const carts = JSON.parse(data);
        const cart = carts.find(cart => cart.id === cartId)

        if (cart){
            const existentProduct = cart.products.find(product => product.id === productId)
            if (existentProduct){
                existentProduct.quantity ++
            } else {
                const newProduct = { id:productId, quantity };
                cart.products.push(newProduct);
            }

            // Escribir los cambios en el archivo "carrito.json" mediante FS
            writeFile('./src/carrito.json', JSON.stringify(carts, null, 2), error => {

                if (error) {
                    console.error(error);
                    return res.status(500).json({ error: 'Error de lectura de archivo' });
                }

                res.status(200).json({ message: 'Producto agregado al carrito' });

            });

        } else {
            res.status(404).json({ error: 'Carrito no encontrado' })
        }
    })
})

export default router