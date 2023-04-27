import express from 'express'
import KPI from '../models/kpis.js'

const kpiRouter = express.Router()

kpiRouter.get('/kpis', async (req, res) => {
    console.log('test');
const KPIData =  await KPI.find({})
res.status(200).json(KPIData)
})

export default kpiRouter