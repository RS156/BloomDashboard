import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { KpiResponse, ProductResponse, TransactionResponse } from './types'

export const api = createApi({
    reducerPath:  'main',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_BASE_URL}/api`}),
    tagTypes:['Kpis', 'Products', 'Transactions'],
    endpoints:(builder)=>({
        getKpis : builder.query<Array<KpiResponse>, void>({
            query: () => '/kpi/kpis',
            providesTags:['Kpis']
        }),
        getProducts : builder.query<Array<ProductResponse>, void>({
            query: () => '/product/products',
            providesTags:['Products']
        }),
        getTransactions : builder.query<Array<TransactionResponse>, void>({
            query: () => '/transaction/transactions',
            providesTags:['Transactions']
        })
    })
})

export const {useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery} = api