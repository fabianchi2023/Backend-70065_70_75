import express from 'express'
import productsModel from '../models/products.model.js'
import cartModel from '../models/carts.model.js'
const router = express.Router()


router.get ('/', async(req,res)=>{
    let carts = await cartModel.find()
    res.json(carts)
})
router.post('/', async(req, res) => {
    
    let {products} = req.body
    let cartOne = await cartModel.create({products})
    res.send({result: "Success", payload: cartOne})


})

router.get('/:cid', async(req, res) => {

    try {
        const wantedCart = await cartModel.findById(req.params.cid)
        if (wantedCart) {
            res.status(200).send(wantedCart)
            
        } else {
            res.status(404).json({ message: "Carrito inexistente" })
        }
    } catch (error) {
        res.status(500).json({ message: "Carrito inexistente" })
    }
})

router.post('/:cid/product/:pid', (req, res) => {

    const cartId = parseInt(req.params.cid); 
    const productId = parseInt(req.params.pid); 
    const {quantity} = req.body

    // readFile('./src/carrito.json', 'utf8', (error, data) => {

    //     if (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: 'Error de lectura de archivo' });
    //     }

    //     const carts = JSON.parse(data);
    //     const cart = carts.find(cart => cart.id === cartId)

    //     if (cart){
    //         const existentProduct = cart.products.find(product => product.id === productId)
    //         if (existentProduct){
    //             existentProduct.quantity ++
    //         } else {
    //             const newProduct = { id:productId, quantity };
    //             cart.products.push(newProduct);
    //         }

    //         // Escribir los cambios en el archivo "carrito.json" mediante FS
    //         writeFile('./src/carrito.json', JSON.stringify(carts, null, 2), error => {

    //             if (error) {
    //                 console.error(error);
    //                 return res.status(500).json({ error: 'Error de lectura de archivo' });
    //             }

    //             res.status(200).json({ message: 'Producto agregado al carrito' });

    //         });

    //     } else {
    //         res.status(404).json({ error: 'Carrito no encontrado' })
    //     }
    // })
})

router.delete('/:cid', async (req, res) => {
    try {
        let deletedProducts  = req.params.cid
        
        
        let result = await cartModel.deleteOne({ _id: deletedProducts })
        res.send({result: "succes", payload:result})
    } catch (error) {   
        res.status(500).json({ message: "Carrito inexistente" })
    }
})


export default router