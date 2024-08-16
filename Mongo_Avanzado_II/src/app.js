import express from "express"
import mongoose from "mongoose"
import orderModel from "./models/order.model.js"
import userModel from "./models/users.model.js"
 const app = express()
 const PORT = 8080

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

 const enviroment = async () => {
    await mongoose.connect("mongodb+srv://fabiobianchi:Ocasa2009@cluster0.dx5auig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    // let orders = await orderModel.aggregate([
    //     {
    //         $match:{size:"medium"}
    //     },
    //     {
    //         $group:{_id:"$name", totalQuantity: {$sum:"$quantity"}}
    //     },
    //     {
    //         $sort:{totalQuantity:-1}
    //     },
    //     {
    //         $group:{_id:1, orders:{$push:"$$ROOT"}}
    //     },
    //     {
    //         $project: {"_id":0, orders: "$orders"}
    //     },
    //     {
    //         $merge:{into:"reports"}
    //     }
    // ])
    // console.log(orders); 

    let users = await userModel.paginate({gender:"Female"}, {limit:5, page:2})
    console.log(users);
    
 }

 enviroment()

 app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
 })