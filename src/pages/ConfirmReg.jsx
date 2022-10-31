import React from 'react'
import { Typography} from '@mui/material'
import Container from '../components/Container'

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

export default ConfirmReg;