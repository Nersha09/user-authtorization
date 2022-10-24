import {useState} from 'react'

import Form from '../componets/Form'
import Container from '../componets/Container'

const SingUp = () => {
    const [signUp, setSignUp] = useState([
        {value: '', name:'Логин', type: 'text', required: true},
        {value: '', name:'Почта', type: 'email', required: true},
        {value: '', name:'Пароль', type: 'password', required: true},
        {value: '', name:'Повторите пароль', type: 'password', required: true},
    ])
    const nextPath = '/addlocation'

  return (
    <Container>
        <Form
            path={nextPath}
            array={signUp}
            setArray={setSignUp}
        />
    </Container>
  )
}

export default SingUp
