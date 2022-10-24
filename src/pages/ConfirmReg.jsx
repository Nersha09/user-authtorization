import React from 'react'
import Container from '../componets/Container'
import { Typography } from '@mui/material'

const ConfirmReg = () => {
  return (
    <Container>
        <Typography 
            sx={{textAlign: 'center', color: 'DimGrey'}}
            mb={5} 
            variant='h6'
        >
            Регистрация прошла успешно
        </Typography>
        
    </Container>
  )
}

export default ConfirmReg
