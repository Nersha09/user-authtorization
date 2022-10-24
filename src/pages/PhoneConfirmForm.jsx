import { Button, TextField} from '@mui/material'
import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';

import Container from '../componets/Container';

const PhoneConfirmForm = () => {
    const [telConfirm, setTelConfirm] = useState({phone: '', password: ''});

    const [visible, setVisible] = useState(false)
    const [disabledForm, setDisabledForm] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
      navigate('/confirmReg')
    }
    const showForm = (e) => {
      //разобраться с превентом и сабмитом
      e.preventDefault()
      if (telConfirm.phone) {
        setVisible(true)
        setDisabledForm(true)
      };
    }

  return (
    <Container>
      <div className='phone-form-direction'>
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
        <form onSubmit={handleSubmit} className={`phone-form${visible ? '-active' : ''}`}>
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
    </Container>
  
    
  )
}

export default PhoneConfirmForm;
