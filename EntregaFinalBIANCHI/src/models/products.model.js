import mongoose from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

const productCollection = "products"

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    code: Number,
    price: Number,
    stock: Number,
    status: Boolean,
    category: String
})

productSchema.plugin(mongoosePaginate) 
const productsModel = mongoose.model(productCollection, productSchema)

export default productsModel 