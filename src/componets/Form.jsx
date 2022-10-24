 import { Button, TextField } from '@mui/material';
import {useNavigate } from 'react-router-dom';

 const Form = ({array, setArray, path}) => {

    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate(`${path}`)
    }
    
    const changeValue = (value, index) => {
        let elements = [...array]
        let element = {...elements[index]}
        element.value = value
        elements[index] = element
        setArray(elements)
    }

    return(
        <form onSubmit={handleSubmit} className='input-form-direction'>
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
    )
 }

 export default Form;