import { Route, Routes} from 'react-router-dom'
import { useSelector} from 'react-redux'
import './styles/App.css'

import PhoneConfirmForm from './pages/PhoneConfirmForm'
import ConfirmReg from './pages/ConfirmReg'
import Form from './components/Form'
import {nextPath} from './nextPath/nextPath'
import {setSignUp} from './store/slices/stepSlice'
import {setLocation} from './store/slices/stepSlice'


function App() {
  const signUp = useSelector(state => state.steps.signUp)
  const location = useSelector(state => state.steps.location)

return (
  <>
    <Routes>
      <Route index path='/' element={<Form array={signUp} path={nextPath.signUp} setArray={setSignUp}/>}/>
      <Route path='/addlocation' element={<Form array={location} path={nextPath.addLocation} setArray={setLocation}/>}/>
      <Route path='/phone-confirm' element={<PhoneConfirmForm/>}/>
      <Route path='/confirmReg' element={<ConfirmReg/>}/>
    </Routes>
  </>
  );
}

export default App;
