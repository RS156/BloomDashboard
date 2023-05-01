import express from 'express'
import KPI from '../models/Kpi.js'

const transactionRouter = express.Router()

transactionRouter.get('/transactions', async (req, res) => {
    console.log('test');
const KPIData =  await KPI.find({})
res.status(200).json(KPIData)
})

export default transactionRouter