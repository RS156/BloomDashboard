import { useTheme, Typography, Box } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'
import { Escalator } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {
  const { palette } = useTheme()
  
  const [selected, setSelected] = useState('dashboard')
  return (
    <FlexBetween bgcolor={palette.background.default} mb="0.5rem" p="0.5rem 2rem" color={palette.grey[300]}
    width='100%'  height='60px' position="sticky" top={0} zIndex="appBar" >
      {/* Left Side */}
      <FlexBetween gap="0.75rem">
        <Escalator sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">BloomDashboard</Typography>
      </FlexBetween>
      {/* Right Side */}
      <FlexBetween gap="2rem" color={palette.grey[700]}>
        <Box sx={{ color: selected === 'dashboard' ? palette.grey[300] : 'inherit', '&:hover': { color: palette.primary[100] } }}>
          <Link style={{
            color: 'inherit',
            textDecoration: 'inherit'
          }}
            to='/'
            onClick={() => { setSelected('dashboard') }}>
            dashboard
          </Link>
        </Box>
        <Box sx={{
          color: selected === 'predictions' ? palette.grey[300] : 'inherit',
          '&:hover': { color: palette.primary[100] }
        }}>
          <Link style={{
            color: 'inherit',
            textDecoration: 'inherit'
          }}
            to='/predictions'
            onClick={() => { setSelected('predictions') }}>
            predictions
          </Link>
        </Box>

      </FlexBetween>

    </FlexBetween>
  )
}

export default Navbar