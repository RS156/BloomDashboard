import React from 'react'
import FlexBetween from './FlexBetween'
import { Box, Typography, useTheme } from '@mui/material'

type Props = {
    headline: String,
    desc?: String,
    secondaryText: String
}

const BoxHeader = (props: Props) => {
    const { palette } = useTheme()
    return (
        <FlexBetween padding='1rem 1rem 0rem 1rem'>
            <Box>
                <Typography variant='h4' color={palette.grey[300]}>{props.headline}</Typography>
                <Typography variant='h6' color={palette.grey[700]}>{props.desc}</Typography>
            </Box>
            <Typography variant='h5' color={palette.secondary[300]}>{props.secondaryText}</Typography>
        </FlexBetween>
    )
}

export default BoxHeader