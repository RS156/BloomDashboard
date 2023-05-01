import express from 'express'
import KPI from '../models/Kpi.js'

const productRouter = express.Router()

productRouter.get('/products', async (req, res) => {
    console.log('test');
const KPIData =  await KPI.find({})
res.status(200).json(KPIData)
})

export default productRouter