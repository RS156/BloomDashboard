import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, BarChart, Bar } from 'recharts';
import { useTheme } from '@mui/material'
import BoxHeader from '@/components/BoxHeader';
import { useMemo } from 'react';

type Props = {}
const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery()  
  let monthData = useMemo(()=> (data && data[0].monthlyData.map(m => {    
    return ({
      month: m.month.substring(0, 3),
      revenue: m.revenue,
      expenses: m.expenses,
      profit: m.revenue-m.expenses
    })
  })),[data])


  
 

  const { palette } = useTheme()
  return (
    <>
      <DashboardBox gridArea='a'>
        <BoxHeader headline='Revenue and Expenses'
          desc='top line represents revenue, bottom line represents expenses'
          secondaryText='+4%' />
        <ResponsiveContainer height='80%'>
          <AreaChart data={monthData}
            margin={{ top: 15, right: 30, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={palette.primary[600]} stopOpacity={0.5} />
                <stop offset="95%" stopColor={palette.primary[600]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tickLine={false} style={{ fontSize: '10px' }} />
            <YAxis type="number" domain={[8000, 23000]} tickLine={false} style={{ fontSize: '10px' }} />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke={palette.primary[600]}
              fillOpacity={1} fill="url(#colorRev)" dot={true} />
            <Area type="monotone" dataKey="expenses" stroke={palette.primary[600]}
              fillOpacity={1} fill="url(#colorRev)" dot={true} />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea='b'>
        <BoxHeader headline='Profit and Revenue'
          desc='top line represents revenue, bottom line represents profit'
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
            <Legend height={15} wrapperStyle={{
              margin: '0 0 8px 0',
              fontSize: '12px'
            }} />
            <Line yAxisId="right" type="monotone" dataKey="profit" stroke={palette.grey[600]}
              dot={true} />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke={palette.primary[600]}
              dot={true} />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea='c'>
        <BoxHeader headline='Revenue Month by Month'
          desc='graph representing revenue month by month'
          secondaryText='+4%' />
        <ResponsiveContainer height='80%'>
          <BarChart data={monthData}
            margin={{ top: 15, right: 30, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={palette.primary[200]} stopOpacity={0.7} />
                <stop offset="95%" stopColor={palette.primary[200]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tickLine={false} style={{ fontSize: '10px' }} />
            <YAxis type="number" tickLine={false} style={{ fontSize: '10px' }} />
            <Tooltip />
            <Bar dataKey="revenue" 
              fillOpacity={1} fill="url(#colorRev)"  />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
      
    </>
  )
}

export default Row1