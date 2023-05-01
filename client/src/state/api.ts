import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { KpiResponse, ProductResponse } from './types'

export const api = createApi({
    reducerPath:  'main',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    tagTypes:['Kpis', 'Products'],
    endpoints:(builder)=>({
        getKpis : builder.query<Array<KpiResponse>, void>({
            query: () => '/kpi/kpis',
            providesTags:['Kpis']
        }),
        getProducts : builder.query<Array<ProductResponse>, void>({
            query: () => '/product/products',
            providesTags:['Products']
        })
    })
})

export const {useGetKpisQuery, useGetProductsQuery} = api