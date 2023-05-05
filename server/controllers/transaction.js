import express from 'express'
import Transaction from '../models/Transaction.js'

const transactionRouter = express.Router()

transactionRouter.get('/transactions', async (req, res) => {
const transactionData =  await Transaction.find({})
.limit(50)
.sort({createdAt: -1})
res.status(200).json(transactionData)
})

export default transactionRouter