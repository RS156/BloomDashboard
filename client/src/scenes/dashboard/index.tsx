import DashboardBox from '@/components/DashboardBox'
import { Box, useMediaQuery } from '@mui/material'
import React from 'react'

type Props = {}
const gridLayoutLargeScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`

const gridLayoutMediumScreens = `
"a b"
"a b"
"a b"
"a b"
"d e"
"d e"
"d h"
"g h"
"g h"
"g h"
"c f"
"c f"
"c f"
"i j"
"i j"
`


const gridLayoutSmallScreens =`
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`

const Dashboard = (props: Props) => {
    const largeScreen = useMediaQuery('(min-width:1300px)')
    const mediumScreen = useMediaQuery('(min-width:1000px)')
    return (
        <Box width='100%' height='100%'
        gap='1.5rem' sx={largeScreen
            ?{
                display: 'grid',
                gridTemplateColumns: "repeat(3,minmax(370px, 1fr))",
                gridTemplateRows: "repeat(10,minmax(55px, 1fr))",
                gridTemplateAreas: gridLayoutLargeScreens
            }
            :mediumScreen?
            {
                display: 'grid',
                gridTemplateColumns: "repeat(2,minmax(370px, 1fr))",
                gridTemplateRows: "repeat(15,minmax(55px, 1fr))",
                gridTemplateAreas: gridLayoutMediumScreens
            }
            :{
                display: 'grid',
                gridAutoColumns: "1fr",
                gridAutoRows:"55px",
                gridTemplateAreas: gridLayoutSmallScreens
            }
        }>
            <DashboardBox bgcolor='#fff' gridArea='a'></DashboardBox>
            <DashboardBox bgcolor='#fff' gridArea='b'></DashboardBox>
            <DashboardBox bgcolor='#fff' gridArea='c'></DashboardBox>
            <DashboardBox bgcolor='#fff' gridArea='d'></DashboardBox>
            <DashboardBox bgcolor='#fff' gridArea='e'></DashboardBox>
            <DashboardBox bgcolor='#fff' gridArea='f'></DashboardBox>
            <DashboardBox bgcolor='#fff' gridArea='g'></DashboardBox>
            <DashboardBox bgcolor='#fff' gridArea='h'></DashboardBox>
            <DashboardBox bgcolor='#fff' gridArea='i'></DashboardBox>
            <DashboardBox bgcolor='#fff' gridArea='j'></DashboardBox>
        </Box>
    )
}

export default Dashboard