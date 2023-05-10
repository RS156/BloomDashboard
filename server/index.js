import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import { errorHandler } from './middleware/middleware.js'
import 'express-async-errors';
import kpiRouter from './controllers/kpi.js'
import { kpis, products, transactions } from './data/data.js'
import KPI from './models/Kpi.js'
import Product from './models/Product.js'
import Transaction from './models/Transaction.js'
import productRouter from './controllers/product.js'
import transactionRouter from './controllers/transaction.js'
// Load environment variables from a .env file
dotenv.config();
// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected')

    /* only run it once */
    // await mongoose.connection.db.dropDatabase()
    // await KPI.insertMany(kpis)
    // await Product.insertMany(products)
    // await Transaction.insertMany(transactions)
    // console.log('mock data added');
  })

// Create an Express app
const app = express();

// Apply middleware for security, CORS, and logging
app.use(helmet())
app.use(cors());
app.use(morgan('common'));
app.use(express.json()); // Add middleware for parsing JSON-encoded request bodies

// Define a simple route
app.use('/kpi', kpiRouter)
app.use('/product', productRouter)
app.use('/transaction', transactionRouter)
app.use(errorHandler)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});