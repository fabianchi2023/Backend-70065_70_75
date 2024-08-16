import express from 'express'
import cartModel from '../models/carts.model.js';
import productsModel from '../models/products.model.js';
const router = express.Router()

router.get('/', async (req, res) => {

    let products = await productsModel.find()
    console.log(products);
    
    res.send({ 
        status: "success", 
        payload: products.docs,
        totalPages: products.Pages,
        prevPage: products.prevPage,
        nextPage: products.nextPage,
        page: products.page,
        hasPrevPage: products.hasPrevPage,
        hasNextPage: products.hasNextPage,
        prevLink: products.prevLink = products.hasPrevPage ? `http://localhost:8080/?page=${products.prevPage}` : null,
        nextLink: products.nextLink = products.hasNextPage ? `http://localhost:8080/?page=${products.nextPage}` : null,
    })

        const limit = req.query.limit;

        if (limit) {
          res.json(products.slice(0, limit));
        } else {
          res.json(products);
        }

    });


router.get('/:pid', (req, res) => {
    
    // const productID = parseInt(req.params.pid);

    // readFile('./src/productos.json', 'utf8', (error, data) => {
        
    //     if (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Error de lectura de archivo' });
    //     }

    //     const products = JSON.parse(data);
    //     const product = products.find(product => product.id === productID);

    //     if (product) {
    //         res.json(product);
    //     } else {
    //         res.status(404).json({ error: 'Producto no encontrado' });
    //     }

    // });

});

router.post('/', (req, res) => {

    const { title, description, code, price, status, stock, category } = req.body;

    // readFile('./src/productos.json', 'utf8', (error, data) => { 

    //     if (error) {
    //         console.error(error)
    //         return res.status(500).json({ error: 'Error de lectura de archivo' });
    //     }

    //     const products = JSON.parse(data);
    //     const id = products.reduce((id, product) => {
    //       return product.id > id ? product.id : id}, 0) + 1;
        
    //     const newProduct = { id, title, description, code, price, status, stock, category };
    //     products.push(newProduct);

    //     writeFile('./src/productos.json', JSON.stringify(products, null, 2), error => {

    //         if (error) {
    //             console.error(error);
    //             return res.status(500).json({ error: 'Error de lectura de archivo' });
    //         }
    //         res.status(201).json(products);
    //     });

    // });

});


router.put('/:pid', (req,res) => {

    // readFile('./src/productos.json', 'utf8', (error, data) => { 

    //     if (error) {
    //         console.error(error)
    //         return res.status(500).json({ error: 'Error de lectura de archivo' });
    //     }

    //     const products = JSON.parse(data);
    
    //     const productID = parseInt(req.params.pid)
    //     const productIndex = products.findIndex(product => product.id === productID);

    //     if (productIndex !== -1){
    //         const productUpdate = products[productIndex]
    //         const {title, description, code, price, status, stock, category} =req.body
    //         productUpdate.title = title ?? productUpdate.title
    //         productUpdate.description = description ?? productUpdate.description
    //         productUpdate.code = code ?? productUpdate.code
    //         productUpdate.price = price ?? productUpdate.price
    //         productUpdate.status = status ?? productUpdate.status
    //         productUpdate.stock = stock ?? productUpdate.stock
    //         productUpdate.category = category ?? productUpdate.category

    //         writeFile('./src/productos.json', JSON.stringify(products, null, 2), error => {

    //             if (error) {
    //                 console.error(error);
    //                 return res.status(500).json({ error: 'Error de lectura de archivo' });
    //             }
    //             res.status(201).json({msg: `El producto # ${productUpdate.id} ha sido actualizado correctamente!`});
    //         });
    //     } else {
    //         res.status(404).json({ error: 'Producto no encontrado' })
    //     }
    // })
})


router.delete('/:pid', (req, res)=>{
    const productID = parseInt(req.params.pid)
    // readFile('./src/productos.json', 'utf8', (error, data) => { 

    //     if (error) {
    //         console.error(error)
    //         return res.status(500).json({ error: 'Error de lectura de archivo' });
    //     }
    //     let products = JSON.parse(data);
    //     products = products.filter(product => product.id !== productID)
    //     writeFile('./src/productos.json', JSON.stringify(products, null, 2), error => {

    //         if (error) {
    //             console.error(error);
    //             return res.status(500).json({ error: 'Error de lectura de archivo' });
    //         }
            
    //         res.status(201).json({msg: `El producto #${productID} ha sido eliminado correctamente`})

    //     })
    // })
})

export default router