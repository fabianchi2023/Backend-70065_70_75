import express from 'express'
import cartModel from '../models/carts.model.js';
import productsModel from '../models/products.model.js';
const router = express.Router()

router.get('/', async (req, res) => {

        let page = parseInt(req.query.page);
        if (!page) page = 1;
        let result = await productsModel.paginate({}, { page, limit: 9, lean: true })
        result.prevLink = result.hasPrevPage ? `http://localhost:8080/api/products?page=${result.prevPage}` : '';
        result.nextLink = result.hasNextPage ? `http://localhost:8080/api/products?page=${result.nextPage}` : '';
        result.isValid = !(page <= 0 || page > result.totalPages)
        res.render('home', result)
        
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

router.post('/', async (req, res) => {

    const { title, description, code, price, status, stock, category } = req.body;

    let newProduct = await productsModel.create({title, description, code, price, status, stock,category})
    res.send ({result:"producto creado", payload: newProduct})
    console.log(newProduct);


});


router.put('/:pid', async (req,res) => {

    try {
        let pid = req.params.pid        
        const productUpdate = await productsModel.findById(pid)

        if(!productUpdate){
            res.status(404).json({message: "Producto inexistente"})
        }

        const {title, description, code, price, status, stock, category} =req.body

        productUpdate.title = title ?? productUpdate.title
        productUpdate.description = description ?? productUpdate.description
        productUpdate.code = code ?? productUpdate.code
        productUpdate.price = price ?? productUpdate.price
        productUpdate.status = status ?? productUpdate.status
        productUpdate.stock = stock ?? productUpdate.stock
        productUpdate.category = category ?? productUpdate.category

        let result = await productsModel.updateOne({_id:pid}, productUpdate)
        res.send({result: "success", payload: result} )

    } catch (error) {
        res.status(500).json({ message: "Producto inexistente" });
    }
    
})


router.delete('/:pid', async (req, res)=>{
    try {
        let deletedProduct  = req.params.pid
        console.log(deletedProduct);
        
        let result = await productsModel.deleteOne({ _id: deletedProduct })
        res.send({result: "succes", payload:result})
    } catch (error) {   
        res.status(500).json({ message: "Producto inexistente" })
    }
})

export default router