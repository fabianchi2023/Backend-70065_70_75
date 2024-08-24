import express from 'express'
import productsModel from '../models/products.model.js'

const router = express.Router()

    router.get('/products', async (req, res) => {
        let page = parseInt(req.query.page)
        let limit = parseInt(req.query.limit)
        if (!page) page = 1;
        if (!limit) limit = 9
        let result = await productsModel.paginate({}, { page, limit, lean: true })
        result.prevLink = result.hasPrevPage ? `http://localhost:8080/products?page=${result.prevPage}` : '';
        result.nextLink = result.hasNextPage ? `http://localhost:8080/products?page=${result.nextPage}` : '';
        result.isValid = !(page <= 0 || page > result.totalPages)
            console.log(result);
            
        res.render('home', result)
        })

    router.get('/realtimeproducts', (req, res)=>{
        res.render('realTimeProducts')
    })

export default router