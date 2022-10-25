import {useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, TextField } from '@mui/material'
import Container from './Container'

 const Form = ({array, setArray, path}) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

// Задает путь следующим этапам регистрации
    const handleSubmit = (e) => {
        navigate(`${path}`)
        e.preventDefault()
    }
    
// Обновляет гобальное состояние
    const changeValue = (value, index) => {
        let elements = [...array]
        let element = {...elements[index]}
        element.value = value
        elements[index] = element
        dispatch(setArray(elements))
    }

    return(
        <Container>
            <form onSubmit={e => handleSubmit(e)} className='input-form-direction'>
                {array.map((item, index) => 
                    <TextField
                        type={item.type}
                        required={item.required}
                        value={item.value}
                        key={item.name}
                        label={item.name}
                        fullWidth
                        margin='dense'                    
                        onChange={(e) => changeValue(e.target.value, index)}
                    />
                )}
                    <Button
                        sx={{mt: '60px', alignSelf: 'end'}} 
                        type='submit' 
                        variant='contained'
                    >
                        Продолжить
                    </Button>
            </form>
        </Container>
        
    )
 }

 export default Form;