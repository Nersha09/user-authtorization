import './styles/App.css';
import { Typography } from '@mui/material';

import InputsForm from './componets/InputsForm'
import PhoneConfirmForm from './componets/PhoneConfirmForm';

function App() {
return (
  <div className='container'>
    <Typography 
      sx={{textAlign: 'center'}}
      color={'DimGrey'} 
      mb={5} 
      variant='h4'
    >
        Регистрация
    </Typography>
    <InputsForm/>
    {/* <PhoneConfirmForm/> */}
  </div>
  );
}

export default App;
