import React from 'react'
import Container from '../componets/Container'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const ConfirmReg = () => {
  const signUp = useSelector(state => state.steps.signUp)
  console.log(signUp, 1);
  const location = useSelector( state => state.steps.location)
  console.log(location, 2);

  return (
    <Container>
    
        <Typography 
            sx={{textAlign: 'center', color: 'DimGrey'}}
            mb={5} 
            variant='h6'
        >
            Регистрация прошла успешно
        </Typography>
        
        {signUp.map((item, i) =>{
          
          if (item.type != 'password') {
            <p key={item.name}>
              {item.name} - {item.value}
            </p>
          }
         })}
    </Container>
  )
}

export default ConfirmReg
{/* <Typography 
            sx={{textAlign: 'center', color: 'DimGrey'}}
            mb={5} 
            variant='h6'
        > */}
        {/* </Typography> */}