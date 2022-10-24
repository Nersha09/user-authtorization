import { useState } from 'react'

import Form from '../componets/Form'
import Container from '../componets/Container'

const AddLocation = () => {
    const [address, setAddress] = useState([
        {value: '', name: ' Страна ', type: 'text', required: false},
        {value: '', name: ' Город ', type: 'text', required: false},
        {value: '', name: 'Улица', type: 'text', required: false},
        {value: '', name: 'Дом', type: 'text', required: false},
    ])

    const nextPath = '/phone-confirm'
  return (
    <Container>
        <Form
            path={nextPath}
            array={address}
            setArray={setAddress}
        />
    </Container>
    
  )
}

export default AddLocation
