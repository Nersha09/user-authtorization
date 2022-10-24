import { Button, TextField, Typography} from '@mui/material'
import {React, useState} from 'react'

const PhoneConfirmForm = () => {
    const [telConfirm, setTelConfirm] = useState({phone: '', password: ''});

    const [visible, setVisible] = useState(false)
    const [disabledForm, setDisabledForm] = useState(false)

    const showForm = (e) => {
      //разобраться с превентом и сабмитом
      e.preventDefault()
      if (telConfirm.phone) {
        setVisible(true)
        setDisabledForm(true)
      };
    }

  return (
  <div className='phone-form-direction'>
    <Typography 
      sx={{textAlign: 'center'}}
      color={'DimGrey'} 
      mb={2} 
      variant='subtitle1'
    >
        Подтверждение номера телефона
    </Typography>
    <form className='phone-formactive'>
      <TextField 
        disabled={disabledForm}
        value={telConfirm.phone}
        type='tel'
        name='phone'
        label='Введите номер телефона'
        required
        fullWidth 
        onChange={e => setTelConfirm({...telConfirm, phone: e.target.value})}
      />
      <Button 
        disabled={disabledForm}
        name='phone'
        sx={{mt: '20px', alignSelf: 'start'}}
        type='submit' 
        variant='outlined'
        onClick={e => showForm(e)}
      >
        Получить код
      </Button>
    </form>
    <form  className={`phone-form${visible ? '-active' : ''}`}>
      <TextField 
        value={telConfirm.password}
        name='password'
        label='Введите код'
        sx={{mt: '20px'}}
        fullWidth
        required
        onChange={e => setTelConfirm({...telConfirm, password: e.target.value})}
      />
      <Button 
        name='password'
        sx={{mt: '140px', alignSelf: 'center'}}
        type='submit'
        variant='contained'
      >
        Зарегесрироваться
      </Button>
    </form>
  </div>
    
  )
}

export default PhoneConfirmForm;
