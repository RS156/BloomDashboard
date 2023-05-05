import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { Box, useTheme } from '@mui/material'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { useMemo } from 'react'
import { Cell, Pie, PieChart } from 'recharts'


type Props = {}

const Row3 = (props: Props) => {
    const { data: kpiData } = useGetKpisQuery()
    const { data: productData } = useGetProductsQuery()
    const { data: transactionData } = useGetTransactionsQuery()
    const { palette } = useTheme()
    console.log(kpiData);

   
    const productColumns = [
        {
            field: '_id',
            headerName: 'id',
            flex: 2
        },
        {
            field: 'expense',
            headerName: 'Expense',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                `$${params.value}`
            )
        },
        {
            field: 'price',
            headerName: 'Price',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                `$${params.value}`
            )
        }
    ]

    const transactionColumns = [
        {
            field: '_id',
            headerName: 'id',
            flex: 3.5
        },
        {
            field: 'buyer',
            headerName: 'Buyer',
            flex: 2.25,           
        },
        {
            field: 'amount',
            headerName: 'Amount',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                `$${params.value}`
            )
        },
        {
            field: 'productIds',
            headerName: 'Count',
            flex: 0.67,
            renderCell: (params: GridRenderCellParams) => (
                `${params.value.length}`
            )
        },

    ]

    const expenseByCategory = kpiData && kpiData[0]?.expensesByCategory    
    const pieData =  expenseByCategory && Object.entries(expenseByCategory)    
    console.log(pieData);
    
      const COLORS = [palette.primary[300], palette.primary[800]];
    

    return (
        <>
            <DashboardBox gridArea='g'>
                <BoxHeader headline='List of Products'
                    secondaryText={`${productData?.length} products`} />
                <Box height='80%' p='0.5rem 1rem' sx={{
                    '& .MuiDataGrid-root': {
                        color: palette.grey[300],
                        border: 'none'
                    },
                    '& .MuiDataGrid-cell': {                        
                        borderBottom: `1px solid ${palette.grey[800]} !important`
                    },
                    '& .MuiDataGrid-columnHeaders': {
                       
                        borderBottom: `1px solid ${palette.grey[800]} !important`
                    },            
                    '& .MuiDataGrid-columnSeparator': {
                        visibility:'hidden !important' 
                    }
                }}>
                    <DataGrid                     
                    rows={productData || []} columns={productColumns} 
                    columnHeaderHeight={25}
                    rowHeight={35} hideFooter={true} />
                </Box>
            </DashboardBox>
            <DashboardBox gridArea='h'>
            <BoxHeader headline='Recent Orders'
                    secondaryText={`${transactionData?.length} latest transactions`} />
                <Box height='80%' p='0.5rem 1rem' sx={{
                    '& .MuiDataGrid-root': {
                        color: palette.grey[300],
                        border: 'none'
                    },
                    '& .MuiDataGrid-cell': {                        
                        borderBottom: `1px solid ${palette.grey[800]} !important`
                    },
                    '& .MuiDataGrid-columnHeaders': {
                       
                        borderBottom: `1px solid ${palette.grey[800]} !important`
                    }, 
                    '& .MuiButtonBase-root': {                       
                        color: palette.grey[300],
                    }, 

                    // '& .MuiDataGrid-columnSeparator': {
                    //     visibility:'hidden' 
                    // }
                }}>
                    <DataGrid                     
                    rows={transactionData || []} columns={transactionColumns} 
                    columnHeaderHeight={25}
                    rowHeight={35} hideFooter={true} />
                </Box>
            </DashboardBox>
            <DashboardBox gridArea='i'>
            <BoxHeader headline='Expense Breakdown By Category'
          secondaryText='+4%' />
        <FlexBetween >
          {/* <PieChart width={100} height={100} style={{flexBasis:'20%'}} >
            <Pie
              data={pieData}
              innerRadius='35%'
              outerRadius='70%'
              dataKey="value"
              stroke='none'
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>           */}
        </FlexBetween>

            </DashboardBox>
            <DashboardBox gridArea='j'></DashboardBox>
        </>
    )
}

export default Row3