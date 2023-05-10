import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { Box, Typography, useTheme } from '@mui/material'
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

    const expenseData = kpiData && Object.entries(kpiData[0]?.expensesByCategory).map( e =>({
        name:e[0],
        pieData:[
            { name: 'expenseCat', value : Number(e[1]) },
            { name: 'remaining', value: Number(kpiData[0].totalExpenses) - Number(e[1])}
        ]        
    }))       
     
   
    
      const COLORS = [palette.primary[800], palette.primary[300]];
    

    return (
        <>
            <DashboardBox gridArea='g'>
                <BoxHeader headline='List of Products'
                    secondaryText={`${productData?.length} products`} />
                <Box height='80%' p='0.5rem 1rem 0rem 1rem' sx={{
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
        <FlexBetween gap='1rem'>
          {expenseData?.map(e =>(
            <Box textAlign='center' p='0 1rem'>
                <PieChart width={90} height={90} style={{flexBasis:'20%'}} >
            <Pie
              data={e.pieData}
              innerRadius='35%'
              outerRadius='70%'
              dataKey="value"
              stroke='none'
            >
              {e.pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>      
          <Typography variant='h5' mt='-0.4rem'>{e.name}</Typography>
            </Box>

          ))}
        </FlexBetween>

            </DashboardBox>
            <DashboardBox gridArea='j'>
            <BoxHeader headline='Overall Summary and Explanation Data'
          secondaryText='+15%' />
          <Box height='15px' bgcolor={palette.primary[700]}
          m='1rem 1rem 0 1rem'
          borderRadius='7px'>
            <Box height='15px' bgcolor={palette.primary[400]}         
          borderRadius='7px' width='40%'></Box>
            </Box>
            <Typography variant='h6' p='0.5rem 1.2rem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Blanditiis, vel. Nostrum natus quis asperiores, sit aliquam eos dicta provident 
             aliquid similique sapiente modi harum autem enim excepturi, ad officiis vel!</Typography>
            </DashboardBox>
        </>
    )
}

export default Row3