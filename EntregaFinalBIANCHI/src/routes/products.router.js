import express from 'express'
import cartModel from '../models/carts.model.js';
import productsModel from '../models/products.model.js';
const router = express.Router()

router.get('/', async (req, res) => {

        let page = parseInt(req.query.page);
        if (!page) page = 1;
        let result = await productsModel.paginate({}, { page, limit: 5, lean: true })
        result.prevLink = result.hasPrevPage ? `http://localhost:8080/api/products?page=${result.prevPage}` : '';
        result.nextLink = result.hasNextPage ? `http://localhost:8080/api/products?page=${result.nextPage}` : '';
        result.isValid = !(page <= 0 || page > result.totalPages)
        res.render('home', result)
        console.log(result);
        
    // let products = await productsModel.paginate({limit:10, page:2})
    // console.log(products);
    ////COMO LLEVO ESTO AL HANDLEBARS????
    // res.send({ 
    //     status: "success", 
    //     payload: products.docs,
    //     totalPages: products.Pages,
    //     prevPage: products.prevPage,
    //     nextPage: products.nextPage,
    //     page: products.page,
    //     hasPrevPage: products.hasPrevPage,
    //     hasNextPage: products.hasNextPage,
    //     prevLink: products.prevLink = products.hasPrevPage ? `http://localhost:8080/?page=${products.prevPage}` : null,
    //     nextLink: products.nextLink = products.hasNextPage ? `http://localhost:8080/?page=${products.nextPage}` : null,
    // })

    // const limit = req.query.limit;

    // if (limit) {
    //     res.json(result.slice(0, limit));
    // } else {
    //     res.send(result);
    // }

    });

router.get('/:pid', async (req, res) => {

        try {
            const wantedProduct = await productsModel.findById(req.params.pid);
            if (wantedProduct) {
                res.status(200).json(wantedProduct);
                console.log(wantedProduct);
                
            } else {
                res.status(404).json({ message: "Producto inexistente" });
            }
        } catch (error) {
            res.status(500).json({ message: "Producto inexistente" });
        }
    })
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

router.post('/', async (req, res) => {

    const { title, description, code, price, status, stock, category } = req.body;

    let newProduct = await productsModel.create({title, description, code, price, status, stock,category})
    res.send ({result:"producto creado", payload: newProduct})
    console.log(newProduct);
    
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
    let deletedProduct = productsModel.deletOne(req.params.pid)
    console.log(deletedProduct);
    res.json({ message: `Producto con id ${req.params.pid} eliminado` })
    
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