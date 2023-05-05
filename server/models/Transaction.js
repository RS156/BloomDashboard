import mongoose from "mongoose";
import { loadType } from 'mongoose-currency'

loadType(mongoose)

const transactionSchema = new mongoose.Schema({
    amount: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    buyer: {
        type: String,
        required: true
    },
    productIds: [{
        type: mongoose.Types.ObjectId,
        ref:'Product'
    }]
}, {
    toJSON: {
        getters: true,
        setters: true
    },
    timestamps: true
}
)

const Transaction = mongoose.model('Transaction', transactionSchema)
export default Transaction  