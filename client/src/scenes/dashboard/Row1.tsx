import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {useTheme } from '@mui/material'
import BoxHeader from '@/components/BoxHeader';



type Props = {}

const Row1 = (props: Props) => {
   const {data }= useGetKpisQuery()
   console.log(data);
   let  monthData = data && data[0].monthlyData.map(m=>{
    return ({
      month:m.month.substring(0,3),
      revenue:m.revenue,
      expenses:m.expenses
    })
   })
   
  const { palette } = useTheme()
  return (
    <>
      <DashboardBox gridArea='a'>
        <BoxHeader headline='Revenue and Expenses' 
        desc='top line represents revenue, bottom line represents expenses' 
        secondaryText='+4%'/>

        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            width={500}
            height={400}
            data={monthData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >         
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke={palette.primary[600]} fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea='b'></DashboardBox>
      <DashboardBox gridArea='c'></DashboardBox>
    </>
  )
}

export default Row1