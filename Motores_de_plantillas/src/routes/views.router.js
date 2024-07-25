import express from 'express'

const router = express.Router()

let food = [
    {name: "Hamburguesa", price:1000 },
    {name: "Pizza", price:2000 },
    {name:"Lomo", price:3000 }
]
router.get('/', (req,res)=> {
    let testUser = {
        name: "Fabio",
        last_name: "Bianchi",
        role:"user"
    }

    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === "admin",
        food
    })
})


export default router