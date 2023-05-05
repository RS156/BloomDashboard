import mongoose from "mongoose";
import { loadType } from 'mongoose-currency'

loadType(mongoose)


const monthSchema = new mongoose.Schema({
    month: String,
    revenue: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    expenses: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    operationalExpenses: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    nonOperationalExpenses: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    }
},
    {
        toJSON: {
            getters: true,
            setters: true
        }
    })

const dailySchema = new mongoose.Schema({
    date: {
        type: Date,
        // Set the date format to ISODate
        get: date => date.toISOString().substr(0, 10),
        // Parse the input date string in ISODate format
        set: dateString => new Date(dateString)
    },
    revenue: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    expenses: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    }
},
    {
        toJSON: {
            getters: true,
            setters: true
        }
    })

const expensesByCategorySchema = new mongoose.Schema({
    salaries: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    supplies: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    services: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    }
},
    {
        "_id": false,
        "toJSON": {
            "getters": true,
            "setters": true,
            "transform": (doc, ret) => {
                delete ret._id;
                delete ret.id;
                return ret;
            }
        }
    })



const kpiSchema = new mongoose.Schema({
    totalProfit: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    totalRevenue: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    totalExpenses: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    targetRevenue: {
        type: mongoose.Types.Currency,
        get: (v) => (v / 100).toFixed(2)
    },
    monthlyData: [monthSchema],
    dailyData: [dailySchema],
    expensesByCategory: expensesByCategorySchema,

}, {
    toJSON: {
        getters: true,
        setters: true
    },
    timestamps: true
}
)

const KPI = mongoose.model('KPI', kpiSchema)
export default KPI  