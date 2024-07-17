const express = require('express')
const router = express.Router()
const fs = require('fs')

// const prueba = []

// router.get('/prueba', (req,res)=> {
//     res.json(prueba)
// })

//Ruta GET para obtener los productos del 'products.json' mediante el endpoint '/api/products' y agregado
// del query limit para limitar la cantidad de registros.

router.get('/', (req, res) => {

// Leer el archivo "products.json" mediante FS

    fs.readFile('./src/products.json', 'utf8', (error, data) => {

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
    
// Leer el archivo "products.json" mediante FS

    fs.readFile('./src/products.json', 'utf8', (error, data) => {
        
        if (error) {

            console.error(error);
            return res.status(500).json({ error: 'Error de lectura de archivo' });

        }

        const products = JSON.parse(data);

        const product = products.find(product => product.id === productID);

        if (product) {

            res.json(product);

        } else {

            res.status(404).json({ error: 'Product not found' });

        }

    });

});

// Ruta POST para el agregado de nuevo producto:

router.post('/', (req, res) => {

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

// Escritura al archivo 'products.json' para el agregado del nuevo producto:

        fs.writeFile('./src/products.json', JSON.stringify(products, null, 2), error => {

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
    
    const productID = parseInt(req.params.pid)

    fs.readFile('./src/products.json', 'utf8', (error, data) => {
        
        if (error) {

            console.error(error);
            return res.status(500).json({ error: 'Error de lectura de archivo' });

        }

        const products = JSON.parse(data);

        const product = products.find(product => product.id === productID);

        if (product) {

           const { title, description, code, price, status, stock, category } = req.body
           product.title = title
        //    const product = { title: title, description:description, code:code, price: price,
        //    status:status, stock:stock, category:category }
           res.json(product)

        } else {

            res.status(404).json({ error: 'Product not found' });

        }

        fs.writeFile('./src/products.json', JSON.stringify(products, null, 2), error => {

            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error de lectura de archivo' });
            }
    
            res.status(201).json(product);
    
        });

    });


    //res.send("Producto actualizado");

})

// Ruta DELETE para eliminar un producto mediante su PID
router.delete('/:pid', (req, res)=>{
    const productID = parseInt(req.params.pid)
    
    fs.readFile('./src/products.json', 'utf8', (error, data) => {
        
        if (error) {

            console.error(error);
            return res.status(500).json({ error: 'Error de lectura de archivo' });

        }

        let products = JSON.parse(data);
        
        if (productID <= products.length){
           
            products = products.filter((product) => product.id !== productID)
            fs.writeFile('./src/products.json', JSON.stringify(products, null, 2), error => {

                if (error) {
                    console.error(error);
                    return res.status(500).json({ error: 'Error de lectura de archivo' });
                }
    
                //res.status(201).json(products);
                res.status(201).json({msg: "Product deleted"})
    
            });
        
        } else{
            return res.status(500).json({ msg: 'Incorrect ID Product' });
        }
  
    })

})

module.exports = router