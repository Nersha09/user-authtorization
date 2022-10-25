import {Typography } from "@mui/material"

const Container = ({children}) => {
  return (
    <div className='container'>
        <Typography 
            sx={{textAlign: 'center', color: 'DimGrey'}}
            mb={5} 
            variant='h4'
        >
                Регистрация
        </Typography>
        {children}
    </div>
  )
}

export default Container
