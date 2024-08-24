import express from 'express'
import cartModel from '../models/carts.model.js';
import productsModel from '../models/products.model.js';
const router = express.Router()

router.get('/', async (req, res) => {

        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit)

        if (!page) page = 1;
        if(!limit) limit = 10
        
        let result = await productsModel.paginate({}, { page, limit, lean: true })
        
        res.send({ 
        status: "success", 
        payload: result.docs,
        totalPages: result.Pages,
        prevPage: result.prevPage,
        nextPage: result.nextPage,
        page: result.page,
        hasPrevPage: result.hasPrevPage,
        hasNextPage: result.hasNextPage,
        prevLink: result.prevLink = result.hasPrevPage ? `http://localhost:8080/api/products?page=${result.prevPage}` : null,
        nextLink: result.nextLink = result.hasNextPage ? `http://localhost:8080/api/products?page=${result.nextPage}` : null,
        })

})

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