import mongoose, { mongo } from "mongoose";

const orderCollection = "orders"
const orderSChema = mongoose.Schema({
    name:String,
    size:{
        type: String,
        enum:["small", "medium", "large"],
        default: "Medium"
    },
    price: Number,
    quantity: Number,
    date: Date
})

const orderModel = mongoose.model(orderCollection, orderSChema)

export default orderModel