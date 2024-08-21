import express from 'express'
import productsModel from '../models/products.model.js'

const router = express.Router()

    router.get('/', async (req, res) => {
            let products = await productsModel.find().lean()
            
            res.render('home', ({products}))
        })

    router.get('/realtimeproducts', (req, res)=>{
        res.render('realTimeProducts')
    })

export default router