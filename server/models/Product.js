import mongoose from "mongoose";
import { loadType } from 'mongoose-currency'

loadType(mongoose)

const productSchema = new mongoose.Schema({
    price: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    expense: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    transactions: [{
        type: mongoose.Types.ObjectId,
        ref:'Transaction'
    }]
}, {
    toJSON: {
        getters: true,
        setters: true
    },
    timestamps: true
}
)

const Product = mongoose.model('Product', productSchema)
export default Product  