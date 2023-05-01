import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween'
import { useGetKpisQuery } from '@/state/api'
import { useTheme } from '@mui/material'
import { useMemo } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, YAxis, ResponsiveContainer, XAxis, PieChart, Pie, Cell } from 'recharts'


type Props = {}

const Row2 = (props: Props) => {
  const { palette } = useTheme()
  const { data } = useGetKpisQuery()

  const targetToReach = data &&
    (data[0].targetRevenue > data[0].totalRevenue
      ? data[0].targetRevenue - data[0].totalRevenue
      : 0)
  const pieData = [
    { name: 'totalRevenue', value : data && Number(data[0].totalRevenue) },
    { name: 'targetToReach', value: targetToReach },
  ];
  console.log(data);
  
  const COLORS = [palette.primary[800], palette.primary[200]];
  let monthData = useMemo(() => (data && data[0].monthlyData.map(m => {
    return ({
      month: m.month.substring(0, 3),
      operationalExpenses: m.operationalExpenses,
      nonOperationalExpenses: m.nonOperationalExpenses
    })
  })), [data])
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
        <FlexBetween >
          <PieChart width={100} height={100}  >
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
        </FlexBetween>

      </DashboardBox>

      <DashboardBox gridArea='f'></DashboardBox>
    </>
  )
}

export default Row2