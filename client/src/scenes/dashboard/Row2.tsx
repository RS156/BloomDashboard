import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween'
import { useGetProductsQuery } from '@/state/api'
import { useGetKpisQuery } from '@/state/api'
import { useTheme, Box, Typography } from '@mui/material'
import { useMemo } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, YAxis, ResponsiveContainer, XAxis, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from 'recharts'


type Props = {}

const Row2 = (props: Props) => {
  const { palette } = useTheme()
  const { data : kpiData} = useGetKpisQuery()
  const {data : productData} = useGetProductsQuery()

  const scatterData = productData && productData.map(p =>(
    {
      price:Number(p.price),
      expense:Number(p.expense)
    }
  )) 

  const targetRev = kpiData ? Math.round(kpiData[0].targetRevenue) : 600000
  const targetToReach = kpiData &&
    (targetRev > kpiData[0].totalRevenue
      ? targetRev - kpiData[0].totalRevenue
      : 0)
  const pieData = [
    { name: 'totalRevenue', value : kpiData && Number(kpiData[0].totalRevenue) },
    { name: 'targetToReach', value: targetToReach },
  ];
  const COLORS = [palette.primary[300], palette.primary[800]];

  let monthData = useMemo(() => (kpiData && kpiData[0].monthlyData.map(m => {
    return ({
      month: m.month.substring(0, 3),
      operationalExpenses: m.operationalExpenses,
      nonOperationalExpenses: m.nonOperationalExpenses
    })
  })), [kpiData])


  return (
    <>
      <DashboardBox gridArea='d'>
        <BoxHeader headline='Operational vs Non-Operational Expenses'
          secondaryText='+4%' />
        <ResponsiveContainer height='80%'>
          <LineChart data={monthData}
            margin={{ top: 15, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis dataKey="month" tickLine={false} style={{ fontSize: '10px' }} />
            <YAxis axisLine={false} type="number" yAxisId="left" tickLine={false} style={{ fontSize: '10px' }} />
            <YAxis axisLine={false} type="number" yAxisId="right" orientation="right"
              tickLine={false} style={{ fontSize: '10px' }} />
            <Tooltip />
            <Line yAxisId="right" type="monotone" dataKey="nonOperationalExpenses" stroke={palette.grey[600]}
              dot={true} />
            <Line yAxisId="left" type="monotone" dataKey="operationalExpenses" stroke={palette.primary[600]}
              dot={true} />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea='e'>
        <BoxHeader headline='Campaigns and Targets'
          secondaryText='+4%' />
        <FlexBetween gap='1rem'>
          <PieChart width={100} height={100} style={{flexBasis:'20%'}} >
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
          </PieChart>
          <Box textAlign='center' flexBasis='40%'>
            <Typography variant='h5'>Target Sales</Typography>
            <Typography variant='h3' m='0.3rem' color={palette.primary[300]}>${targetRev}</Typography>
            <Typography variant='h6'>Finance goals of the campaign that is desired</Typography>
          </Box>
          <Box alignItems='left' flexBasis='40%'>
            <Typography variant='h5'>Losses in Revenue</Typography>            
            <Typography variant='h6'>Losses are down 25%</Typography>
            <Typography variant='h5' sx={{mt:'0.4rem'}}>Profit Margins</Typography>            
            <Typography variant='h6'>Margins are up by 30% from last month</Typography>
          </Box>
        </FlexBetween>

      </DashboardBox>

      <DashboardBox gridArea='f'>
      <BoxHeader headline='Product Prices vs Expenses'
          secondaryText='+4%' />
          <ResponsiveContainer width="100%" height='80%'>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: -10,
            left: -20,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]} />
          <XAxis type="number" dataKey="price" tickLine={false} axisLine={false} tickFormatter={(v)=>(`$${v}`)}/>
          <YAxis type="number" dataKey="expense" tickLine={false} axisLine={false} tickFormatter={(v)=>(`$${v}`)}/>
          <ZAxis range={[20]} />
          <Tooltip cursor={{ strokeDasharray: '2 2' }} formatter={(v)=>(`$${v}`)}/>
          <Scatter name="A school" data={scatterData} fill={palette.tertiary[500]} style={{fontSize:'1px'}}/>
        </ScatterChart>
      </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default Row2