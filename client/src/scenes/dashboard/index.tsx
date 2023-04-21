import { Box } from '@mui/material'
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

const Dashboard = (props: Props) => {
    return (
        <Box width='100%' height='100%'
        gap='1.5rem' sx={
            {
                display: 'grid',
                gridTemplateColumns: "repeat(3,minmax(370px, 1fr))",
                gridTemplateRows: "repeat(10,minmax(45px, 1fr))",
                gridTemplateAreas: gridLayoutLargeScreens
            }
        }>
            <Box bgcolor='#fff' gridArea='a'></Box>
            <Box bgcolor='#fff' gridArea='b'></Box>
            <Box bgcolor='#fff' gridArea='c'></Box>
            <Box bgcolor='#fff' gridArea='d'></Box>
            <Box bgcolor='#fff' gridArea='e'></Box>
            <Box bgcolor='#fff' gridArea='f'></Box>
            <Box bgcolor='#fff' gridArea='g'></Box>
            <Box bgcolor='#fff' gridArea='h'></Box>
            <Box bgcolor='#fff' gridArea='i'></Box>
            <Box bgcolor='#fff' gridArea='j'></Box>
        </Box>
    )
}

export default Dashboard