import { useGetKpisQuery } from '@/state/api'
import { Box, useMediaQuery } from '@mui/material'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'

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
"c d"
"c d"
"c d"
"e f"
"e f"
"g f"
"g h"
"g h"
"i h"
"i h"
"j ."
"j ."
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
    const {data }= useGetKpisQuery()
    console.log(data);
    
    const largeScreen = useMediaQuery('(min-width:1300px)')
    const mediumScreen = useMediaQuery('(min-width:1000px)')
    return (
        <Box width='100%'
        gap='1.5rem' sx={largeScreen
            ?{
                display: 'grid',
                gridTemplateColumns: "repeat(3,minmax(370px, 1fr))",
                gridTemplateRows: "repeat(10,minmax(60px, 1fr))",
                gridTemplateAreas: gridLayoutLargeScreens
            }
            :mediumScreen?
            {
                display: 'grid',
                gridTemplateColumns: "repeat(2,minmax(370px, 1fr))",
                gridTemplateRows: "repeat(16,minmax(60px, 1fr))",
                gridTemplateAreas: gridLayoutMediumScreens
            }
            :{
                display: 'grid',
                gridAutoColumns: "1fr",
                gridAutoRows:"60px",
                gridTemplateAreas: gridLayoutSmallScreens
            }
        }>
            <Row1/>
            <Row2/>
            <Row3/>            
        </Box>
    )
}

export default Dashboard