 import { Button, TextField } from '@mui/material';

import {useState} from 'react'

 const InputsForm = () => {
    const [signUp, setSignUp] = useState([
        {value: '', name:'Логин', type: 'text', required: true},
        {value: '', name:'Почта', type: 'email', required: true},
        {value: '', name:'Пароль', type: 'password', required: true},
        {value: '', name:'Повторите пароль', type: 'password', required: true},
    ])

    const [address, setAddress] = useState([
        {value: '', name: ' Страна ', type: 'text', required: false},
        {value: '', name: ' Город ', type: 'text', required: false},
        {value: '', name: 'Улица', type: 'text', required: false},
        {value: '', name: 'Дом', type: 'text', required: false},
    ])
    
    const changeValue = (value, index) => {
        let elements = [...signUp]
        let element = {...elements[index]}
        element.value = value
        elements[index] = element
        setSignUp(elements)
    }

    return(
        <form className='input-form-direction'>

            {signUp.map((item, index) => 
                <TextField
                    type={item.type}
                    required={item.required}
                    value={item.value}
                    key={item.name}
                    label={item.name}
                    fullWidth
                    margin='dense'                    
                    onChange={(e) => changeValue(e.target.value, index )}
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

 export default InputsForm;