import express from 'express'
import Product from '../models/Product.js';


const productRouter = express.Router()

productRouter.get('/products', async (req, res) => {
    console.log('test');
const ProductData =  await Product.find({})
res.status(200).json(ProductData)
})

export default productRouter