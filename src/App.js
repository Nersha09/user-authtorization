import { Route, Routes} from 'react-router-dom';
import './styles/App.css';

import SingUp from './pages/SingUp';
import AddLocation from './pages/AddLocation';
import PhoneConfirmForm from './pages/PhoneConfirmForm';
import ConfirmReg from './pages/ConfirmReg';


function App() {
return (
  <>
    <Routes>
      <Route index path='/sign-up' element={<SingUp/>}/>
      <Route path='/addlocation' element={<AddLocation/>}/>
      <Route path='/phone-confirm' element={<PhoneConfirmForm/>}/>
      <Route path='/confirmReg' element={<ConfirmReg/>}/>
    </Routes>
  </>
  );
}

export default App;
