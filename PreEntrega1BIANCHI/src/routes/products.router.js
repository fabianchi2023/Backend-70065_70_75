const express = require('express')
const router = express.Router()
const fs = require('fs')

// const prueba = []

// router.get('/prueba', (req,res)=> {
//     res.json(prueba)
// })

//Ruta GET para obtener los productos del 'productos.json' mediante el endpoint '/api/products' y agregado
// del query limit para limitar la cantidad de registros.

router.get('/', (req, res) => {

// Leer el archivo "productos.json" mediante FS

    fs.readFile('./src/productos.json', 'utf8', (error, data) => {

        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error de lectura de archivo' });
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

// Ruta GET para obtener el producto con el PID proporcionado

router.get('/:pid', (req, res) => {
    
    const productID = parseInt(req.params.pid);
    
// Leer el archivo "productos.json" mediante FS

    fs.readFile('./src/productos.json', 'utf8', (error, data) => {
        
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error de lectura de archivo' });
        }

        const products = JSON.parse(data);
        const product = products.find(product => product.id === productID);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }

    });

});

// Ruta POST para el agregado de nuevo producto:

router.post('/', (req, res) => {

    const { title, description, code, price, status, stock, category } = req.body;

// Lectura del archivo 'productos.json' para identificar la longitud del array que marcara la automatizacion
// en la asignacion del ID del nuevo producto.

    fs.readFile('./src/productos.json', 'utf8', (error, data) => { 

        if (error) {
            console.error(error)
            return res.status(500).json({ error: 'Error de lectura de archivo' });
        }

        const products = JSON.parse(data);
        const id = products.reduce((id, product) => {
          return product.id > id ? product.id : id}, 0) + 1;
        
        const newProduct = { id, title, description, code, price, status, stock, category };
        products.push(newProduct);

        // Escritura al archivo 'productos.json' para el agregado del nuevo producto:

        fs.writeFile('./src/productos.json', JSON.stringify(products, null, 2), error => {

            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error de lectura de archivo' });
            }
            res.status(201).json(products);
        });

    });

});

// Ruta PUT para actualizar los campos ingresados mediante el body de un producto indicado mediante su PID
router.put('/:pid', (req,res) => {

    fs.readFile('./src/productos.json', 'utf8', (error, data) => { 

        if (error) {
            console.error(error)
            return res.status(500).json({ error: 'Error de lectura de archivo' });
        }

        const products = JSON.parse(data);
    
        const productID = parseInt(req.params.pid)
        const productIndex = products.findIndex(product => product.id === productID);

        if (productIndex !== -1){
            const productUpdate = products[productIndex]
            const {title, description, code, price, status, stock, category} =req.body
            productUpdate.title = title ?? productUpdate.title
            productUpdate.description = description ?? productUpdate.description
            productUpdate.code = code ?? productUpdate.code
            productUpdate.price = price ?? productUpdate.price
            productUpdate.status = status ?? productUpdate.status
            productUpdate.stock = stock ?? productUpdate.stock
            productUpdate.category = category ?? productUpdate.category

            fs.writeFile('./src/productos.json', JSON.stringify(products, null, 2), error => {

                if (error) {
                    console.error(error);
                    return res.status(500).json({ error: 'Error de lectura de archivo' });
                }
                res.status(201).json({msg: `El producto # ${productUpdate.id} ha sido actualizado correctamente!`});
            });
        } else {
            res.status(404).json({ error: 'Producto no encontrado' })
        }
    })
})

// Ruta DELETE para eliminar un producto mediante su PID
router.delete('/:pid', (req, res)=>{
    const productID = parseInt(req.params.pid)
    fs.readFile('./src/productos.json', 'utf8', (error, data) => { 

        if (error) {
            console.error(error)
            return res.status(500).json({ error: 'Error de lectura de archivo' });
        }
        let products = JSON.parse(data);
        products = products.filter(product => product.id !== productID)
        fs.writeFile('./src/productos.json', JSON.stringify(products, null, 2), error => {

            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error de lectura de archivo' });
            }
            
            res.status(201).json({msg: `El producto #${productID} ha sido eliminado correctamente`})

        })
    })
})

module.exports = router