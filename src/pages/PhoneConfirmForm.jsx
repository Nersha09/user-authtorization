import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextField} from '@mui/material'

import Container from '../componets/Container'
import {setPhoneConfirm } from './../store/slices/phoneCofirmSlice'

const PhoneConfirmForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const phoneConfirm = useSelector(state => state.phoneConfirm.phoneConfirm)

    const [visible, setVisible] = useState(false)
    const [disabledForm, setDisabledForm] = useState(false)

    // Задает путь следующим этапам регистрации
    const handleSubmit = () => {
      navigate('/confirmReg')
    }

    // Отрисовывет поле для подтвереждения телефона после ввода номера. 
    // Устанавливает disabled полю для ввобда телефона и его кнопке
    const showForm = (e) => {
      e.preventDefault()
      if (phoneConfirm.phone) {
        setVisible(true)
        setDisabledForm(true)
      }
    }

  return (
    <Container>
      <div className='phone-form-direction'>
        <form className='phone-formactive'>
          <TextField 
            disabled={disabledForm}
            value={phoneConfirm.phone}
            type='tel'
            name='phone'
            label='Введите номер телефона'
            required
            fullWidth 
            onChange={e => dispatch(setPhoneConfirm({...phoneConfirm, phone: e.target.value}))}
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
            value={phoneConfirm.password}
            name='password'
            label='Введите код'
            sx={{mt: '20px'}}
            fullWidth
            required
            onChange={e => dispatch(setPhoneConfirm({...phoneConfirm, password: e.target.value}))}
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
